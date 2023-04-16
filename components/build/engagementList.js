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
import EngagementItem from './engagementItem';
import {
	addOrUpdateArray,
	generateNewItem,
	removeFromArray,
} from '../../utils/resumeDataHelper';

const EngagemenList = (props) => {

    const [currentItem, setCurrentItem] = useState();

	const {open, setOpen, transition, engagements, handleUpdate} = props;

    const header = "Engagements"

    const tableHeaders = ['Engagement Name', 'Engagement Url', 'Date',];

    const handleOpen = (item) => {
		if (item) {
			setCurrentItem(item)
		} else {
			setCurrentItem(generateNewItem(engagements, header))
		}
		setOpen(true)
	}

	const handleEngagementsUpdate = (event) => {
		setCurrentItem({ ...currentItem, [event.target.id]: event.target.value });
	};

	const handleSave = (item) => {
		const updatedEngagements = addOrUpdateArray(engagements, item)
		handleUpdate(updatedEngagements)
		setOpen(false)
	}

	const handleDelete = () => {
		const updatedEngagements = removeFromArray(engagements, currentItem.id)
		handleUpdate(updatedEngagements)
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
				<EngagementItem
					open={open}
					setOpen={setOpen}
					transition={transition}
					header={header}
					item={currentItem}
					handleDelete={handleDelete}
					handleUpdate={handleEngagementsUpdate}
					handleSave={handleSave}
				/>
			)}
			<TableContainer sx={{ml: 3, width: '98%'}}>
				<Table>
					<SharedTableHeader tableHeaders={tableHeaders} />
					<TableBody>
                        {props.engagements.map((item) => {
                            return (
                                <TableRow key={item.id} onClick={() => handleOpen(item)}>
                                    <TableCell>{item.title}</TableCell>
                                    <TableCell>{item.link}</TableCell>
                                    <TableCell>{item.date}</TableCell>
                                </TableRow>
                            )
                        })}
					</TableBody>
				</Table>
			</TableContainer>
		</>
    )
}

export default EngagementList