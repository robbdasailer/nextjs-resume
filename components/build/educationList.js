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
import EducationItem from './educationItem';
import {
	addOrUpdateArray,
	generateNewItem,
	removeFromArray,
	validateItem,
} from '../../utils/resumeDataHelper';

const EducationList = (props) => {
	const [currentItem, setCurrentItem] = useState();

	const { open, setOpen, transition, education, handleUpdate } = props;

	const header = 'Education';

	const tableHeaders = ['School', 'School URL', 'Start Date', 'End Date', 'Degree', 'Degree Description'];

	const handleOpen = (item) => {
		if (item) {
			setCurrentItem(item);
		} else {
			setCurrentItem(generateNewItem(education, header));
		}
		setOpen(true);
	};

	const handleEducationUpdate = (event) => {
		setCurrentItem({ ...currentItem, [event.target.id]: event.target.value });
	};

	const handleSave = (item) => {
		const updatedEducation = addOrUpdateArray(education, item);
		handleUpdate(updatedEducation);
		setOpen(false);
	};

	const handleDelete = () => {
		const updatedEducation = removeFromArray(education, currentItem.id);
		handleUpdate(updatedEducation);
		setOpen(false);
	};

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
				<EducationItem
					open={open}
					setOpen={setOpen}
					transition={transition}
					header={header}
					item={currentItem}
					handleDelete={handleDelete}
					handleUpdate={handleEducationUpdate}
					handleSave={handleSave}
				/>
			)}
			<TableContainer sx={{ ml: 3, width: '98%' }}>
				<Table>
					<SharedTableHeader tableHeaders={tableHeaders} />
					<TableBody>
						{education.map((item) => {
							return (
								<TableRow key={item.id} onClick={() => handleOpen(item)}>
									<TableCell>{item.school}</TableCell>
									<TableCell>{item.schoolUrl}</TableCell>
									<TableCell>{item.startDate}</TableCell>
									<TableCell>{item.endDate}</TableCell>
									<TableCell>{item.degree}</TableCell>
									<TableCell>{item.degreeDescription}</TableCell>
								</TableRow>
							);
						})}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	);
};

export default EducationList;
