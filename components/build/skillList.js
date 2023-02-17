import { useState } from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

import SharedTableHeader from './sharedTableHeader';
import SkillItem from './skillItem';
import {
	addOrUpdateArray,
	generateNewItem,
	removeFromArray,
} from '../../utils/resumeDataHelper';

const SkillList = (props) => {
	const [currentItem, setCurrentItem] = useState();

	const { open, setOpen, transition, skills, handleUpdate } = props;

	const tableHeaders = ['Name', 'Rating', 'Blurb'];

	const header = 'Skills';

	const handleOpen = (item) => {
		if (item) {
			setCurrentItem(item);
		} else {
			setCurrentItem(generateNewItem(skills, header));
		}
		setOpen(true);
	};

	const handleSkillUpdate = (event) => {
		setCurrentItem({ ...currentItem, [event.target.id]: event.target.value });
	};

	const handleSave = (item) => {
		const updatedSkills = addOrUpdateArray(skills, item);
		handleUpdate(updatedSkills);
		setOpen(false);
	};

	const handleDelete = () => {
		const updatedSkills = removeFromArray(skills, currentItem.id);
		handleUpdate(updatedSkills);
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
				<SkillItem
					open={open}
					setOpen={setOpen}
					transition={transition}
					header={header}
					item={currentItem}
					handleDelete={handleDelete}
					handleUpdate={handleSkillUpdate}
					handleSave={handleSave}
				/>
			)}
			<TableContainer sx={{ ml: 3, width: '98%' }}>
				<Table>
					<SharedTableHeader tableHeaders={tableHeaders} />
					<TableBody>
						{props.skills.map((item) => {
							return (
								<TableRow key={item.id} onClick={() => handleOpen(item)}>
									<TableCell>{item.skillName}</TableCell>
									<TableCell>{item.rating}</TableCell>
									<TableCell>{item.blurb}</TableCell>
								</TableRow>
							);
						})}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	);
};

export default SkillList;
