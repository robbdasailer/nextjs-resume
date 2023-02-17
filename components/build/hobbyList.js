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
import HobbyItem from './hobbyItem';
import {
	addOrUpdateArray,
	generateNewItem,
	removeFromArray,
} from '../../utils/resumeDataHelper';

const HobbyList = (props) => {
	const [currentItem, setCurrentItem] = useState();

	const { open, setOpen, transition, hobbies, handleUpdate } = props;

	const tableHeaders = ['Hobby Name', 'Hobby Icon'];

	const header = 'Hobbies';

	const handleOpen = (item) => {
		if (item) {
			setCurrentItem(item);
		} else {
			setCurrentItem(generateNewItem(hobbies, header));
		}
		setOpen(true);
	};

	const handleHobbyUpdate = (event) => {
		setCurrentItem({ ...currentItem, [event.target.id]: event.target.value });
	};

	const handleSave = (item) => {
		const updatedHobbies = addOrUpdateArray(hobbies, item);
		handleUpdate(updatedHobbies);
		setOpen(false);
	};

	const handleDelete = () => {
		const updatedHobbies = removeFromArray(hobbies, currentItem.id);
		handleUpdate(updatedHobbies);
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
				<HobbyItem
					open={open}
					setOpen={setOpen}
					transition={transition}
					header={header}
					item={currentItem}
					handleDelete={handleDelete}
					handleUpdate={handleHobbyUpdate}
					handleSave={handleSave}
				/>
			)}
			<TableContainer sx={{ ml: 3, width: '98%' }}>
				<Table>
					<SharedTableHeader tableHeaders={tableHeaders} />
					<TableBody>
						{props.hobbies.map((item) => {
							return (
								<TableRow key={item.id} onClick={() => handleOpen(item)}>
									<TableCell>{item.title}</TableCell>
									<TableCell>{item.icon}</TableCell>
								</TableRow>
							);
						})}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	);
};

export default HobbyList;
