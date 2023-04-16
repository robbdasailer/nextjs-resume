import { useState } from 'react';

import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import {
	convertToDatePickerInput,
	validateItem,
} from '../../utils/resumeDataHelper';

const EngagementItem = (props) => {
	const { open, setOpen, transition, header, item, handleDelete, handleSave } =
		props;

	const [resumeItem, setResumeItem] = useState(item);
	const [isValid, setIsValid] = useState(true);

	const timeOptions = {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	};

	const handleItemChange = (event) => {
		setResumeItem({ ...resumeItem, [event.target.id]: event.target.value });
	};

	const handleDateChange = (event) => {
		const date = new Date(event.target.value);
		setResumeItem({
			...resumeItem,
			[event.target.id]: date.toLocaleString('en-GB', timeOptions),
		});
	};

	const handleValidate = () => {
		var itemIsValid = validateItem(resumeItem, [
			'title',
			'link',
			'date',
		]);
		setIsValid(itemIsValid);
		if (itemIsValid) {
			handleSave(resumeItem);
		}
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<Dialog onClose={handleClose} open={open} TransitionComponent={transition}>
			<DialogTitle>
                <Typography>Add/Edit {header} Item</Typography>
				{open ? (
					<IconButton
						color='action'
						aria-label='close'
						onClick={handleClose}
						sx={{
							position: 'absolute',
							right: 8,
							top: 8,
						}}
					>
						<CloseIcon />
					</IconButton>
				) : null}
			</DialogTitle>
			<DialogContent>
				<Stack direction='column'>
					<TextField
						required
						error={!isValid}
						id='title'
						label='Title'
						onChange={handleItemChange}
						defaultValue={resumeItem.title}
                        
						sx={{ ml: 1, mt: 2, mr: 1, width: '30rem' }}
					/>
					<TextField
						required
						error={!isValid}
						id='link'
						label='Link'
						onChange={handleItemChange}
						defaultValue={resumeItem.link}
						sx={{ ml: 1, mt: 2, mr: 1 }}
					/>
					<TextField
						id='date'
						error={!isValid}
						label='Date'
						type='date'
						required
						defaultValue={convertToDatePickerInput(resumeItem.date)}
						onChange={handleDateChange}
						sx={{ ml: 1, mt: 2, mr: 1 }}
						InputLabelProps={{
							shrink: true,
						}}
					/>
				</Stack>
				<Button sx={{ mt: 1, mb: 1, ml: 1 }} onClick={handleValidate}>
					<SaveIcon sx={{ mr: 1 }}></SaveIcon>
					Save
				</Button>
				<Button sx={{ mt: 1, mb: 1, ml: 2 }} onClick={handleDelete}>
					<DeleteForeverIcon sx={{ mr: 1 }}></DeleteForeverIcon>
					Delete
				</Button>
			</DialogContent>
		</Dialog>
	);
};

export default EngagementItem;
