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
import LanguageItem from './languageItem';
import {
	addOrUpdateArray,
	generateNewItem,
	removeFromArray,
} from '../../utils/resumeDataHelper';

const LanguageList = (props) => {
	const [currentItem, setCurrentItem] = useState();

	const { open, setOpen, transition, languages, handleUpdate } = props;

	const tableHeaders = ['Name', 'Rating', 'Blurb'];

	const header = 'Language';

	const handleOpen = (item) => {
		if (item) {
			setCurrentItem(item);
		} else {
			setCurrentItem(generateNewItem(languages, header));
		}
		setOpen(true);
	};

	const handleLanguageUpdate = (event) => {
		setCurrentItem({ ...currentItem, [event.target.id]: event.target.value });
	};

	const handleSave = (item) => {
		const updatedLanguages = addOrUpdateArray(languages, item);
		handleUpdate(updatedLanguages);
		setOpen(false);
	};

	const handleDelete = () => {
		const updatedLanguages = removeFromArray(languages, currentItem.id);
		handleUpdate(updatedLanguages);
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
				<LanguageItem
					open={open}
					setOpen={setOpen}
					transition={transition}
					header={header}
					item={currentItem}
					handleDelete={handleDelete}
					handleUpdate={handleLanguageUpdate}
					handleSave={handleSave}
				/>
			)}
			<TableContainer sx={{ ml: 3, width: '98%' }}>
				<Table>
					<SharedTableHeader tableHeaders={tableHeaders} />
					<TableBody>
						{props.languages.map((item) => {
							return (
								<TableRow key={item.id} onClick={() => handleOpen(item)}>
									<TableCell>{item.languageName}</TableCell>
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

export default LanguageList;
