import { useState } from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';

import SharedTableHeader from './sharedTableHeader';
import CertificationItem from './certificationItem';
import {
	addOrUpdateArray,
	generateNewItem,
	removeFromArray,
} from '../../utils/resumeDataHelper';

const CertificationList = (props) => {

    const [currentItem, setCurrentItem] = useState();

	const {open, setOpen, transition, certifications, handleUpdate} = props;

    const header = "Certifications"

    const tableHeaders = ['Certification Name', 'Certification Url', 'Date Achieved',];

    const handleOpen = (item) => {
		if (item) {
			setCurrentItem(item)
		} else {
			setCurrentItem(generateNewItem(certifications, header))
		}
		setOpen(true)
	}

	const handleCertificationsUpdate = (event) => {
		setCurrentItem({ ...currentItem, [event.target.id]: event.target.value });
	};

	const handleSave = (item) => {
		const updatedCertifications = addOrUpdateArray(certifications, item)
		handleUpdate(updatedCertifications)
		setOpen(false)
	}

	const handleDelete = () => {
		const updatedCertifications = removeFromArray(certifications, currentItem.id)
		handleUpdate(updatedCertifications)
		setOpen(false)
	}

    return (
		<>
		<Typography variant='h3' ml={5} mb={1} mt={1}>
			{header}
			<Button sx={{ ml: 5 }} onClick={() => handleOpen(null)}>
				<AddIcon></AddIcon>
				Add Item
			</Button>
		</Typography>
        {open && (
				<CertificationItem
					open={open}
					setOpen={setOpen}
					transition={transition}
					header={header}
					item={currentItem}
					handleDelete={handleDelete}
					handleUpdate={handleCertificationsUpdate}
					handleSave={handleSave}
				/>
			)}
			<TableContainer sx={{ml: 3, width: '98%'}}>
				<Table>
					<SharedTableHeader tableHeaders={tableHeaders} />
					<TableBody>
                        {props.certifications.map((item) => {
                            return (
                                <TableRow key={item.id} onClick={() => handleOpen(item)}>
                                    <TableCell>{item.title}</TableCell>
                                    <TableCell>{item.link}</TableCell>
                                    <TableCell>{item.dateAchieved}</TableCell>
                                </TableRow>
                            )
                        })}
					</TableBody>
				</Table>
			</TableContainer>
		</>
    )
}

export default CertificationList