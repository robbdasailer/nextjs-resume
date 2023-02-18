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
import WorkHistoryItem from './workHistoryItem';
import {
	addOrUpdateArray,
	generateNewItem,
	removeFromArray,
	validateItem,
} from '../../utils/resumeDataHelper';

const WorkHistoryList = (props) => {
	const [currentItem, setCurrentItem] = useState();

	const { open, setOpen, transition, workHistory, handleUpdate } = props;

	const header = 'Work History';

	const tableHeaders = [
		'Company',
		'Company Link',
		'Start Date',
		'End Date',
		'Job Title',
		'Job Description',
	];

	const handleOpen = (item) => {
		if (item) {
			setCurrentItem(item);
		} else {
			setCurrentItem(generateNewItem(workHistory, header));
		}
		setOpen(true);
	};

	const handleWorkHistoryUpdate = (event) => {
		setCurrentItem({ ...currentItem, [event.target.id]: event.target.value });
	};

	const handleSave = (item) => {
		const updatedWorkHistory = addOrUpdateArray(workHistory, item);
		handleUpdate(updatedWorkHistory);
		setOpen(false);
	};

	const handleDelete = () => {
		const updatedWorkHistory = removeFromArray(workHistory, currentItem.id);
		handleUpdate(updatedWorkHistory);
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
				<WorkHistoryItem
					open={open}
					setOpen={setOpen}
					transition={transition}
					header={header}
					item={currentItem}
					handleDelete={handleDelete}
					handleUpdate={handleWorkHistoryUpdate}
					handleSave={handleSave}
				/>
			)}
			<TableContainer sx={{ ml: 3, width: '98%' }}>
				<Table>
					<SharedTableHeader tableHeaders={tableHeaders} />
					<TableBody>
						{workHistory.map((item) => {
							return (
								<TableRow key={item.id} onClick={() => handleOpen(item)}>
									<TableCell>{item.company}</TableCell>
									<TableCell>{item.companyLink}</TableCell>
									<TableCell>{item.startDate}</TableCell>
									<TableCell>{item.endDate}</TableCell>
									<TableCell>{item.jobTitle}</TableCell>
									<TableCell>{item.jobDescription}</TableCell>
								</TableRow>
							);
						})}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	);
};

export default WorkHistoryList;
