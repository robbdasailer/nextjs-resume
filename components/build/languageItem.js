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
import Slider from '@mui/material/Slider';
import Stack from '@mui/material/Stack';
import InputLabel from '@mui/material/InputLabel';
import Tooltip from '@mui/material/Tooltip';

import { validateItem } from '../../utils/resumeDataHelper';

const LanguageItem = (props) => {
	const { open, setOpen, transition, header, item, handleDelete, handleSave } =
		props;

	const [resumeItem, setResumeItem] = useState(item);
	const [isValid, setIsValid] = useState(true);

	const handleItemChange = (event) => {
		setResumeItem({ ...resumeItem, [event.target.name]: event.target.value });
	};

	const handleValidate = () => {
		var itemIsValid = validateItem(resumeItem, ['languageName', 'blurb']);
		setIsValid(itemIsValid);
		if (itemIsValid) {
			handleSave(resumeItem);
		}
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<Dialog
			onClose={handleClose}
			open={open}
			TransitionComponent={transition}
			fullWidth
			maxWidth='md'
		>
			<DialogTitle>
				Add/Edit {header} Item
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
						id='languageName'
						name='languageName'
						label='Language Name'
						onChange={handleItemChange}
						defaultValue={resumeItem.languageName}
						sx={{ ml: 1, mt: 2, mr: 1, width: 'auto' }}
					/>
					<Tooltip
						title='Give a brief summary of the language here'
						arrow
						placement='top'
					>
						<TextField
							required
							error={!isValid}
							id='blurb'
							name='blurb'
							label='language Blurb'
							onChange={handleItemChange}
							defaultValue={resumeItem.blurb}
							sx={{ ml: 1, mt: 2, mr: 1, width: 'auto' }}
						/>
					</Tooltip>
					<InputLabel id='rating-label' sx={{ mt: 2, textAlign: 'center' }}>
						Language Rating
					</InputLabel>
					<Slider
						name='rating'
						color='secondary'
						variant='determinate'
						defaultValue={resumeItem.rating}
						step={5}
						min={0}
						max={100}
						onChange={handleItemChange}
						sx={{ my: 1 }}
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

export default LanguageItem;
