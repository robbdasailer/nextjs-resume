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
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const HobbyItem = (props) => {
	const { open, setOpen, transition, header, item, handleDelete, handleSave } =
		props;

	const [resumeItem, setResumeItem] = useState(item);

	const hobbyIcons = [
		'bbq',
		'beer',
		'outdoor',
		'family',
		'music',
		'tech',
		'hiking',
		'music',
		'other',
	];

	const handleItemChange = (event) => {
		setResumeItem({ ...resumeItem, [event.target.name]: event.target.value });
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<Dialog onClose={handleClose} open={open} TransitionComponent={transition}>
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
						id='title'
						name='title'
						label='Hobby Name'
						onChange={handleItemChange}
						defaultValue={resumeItem.title}
						sx={{ ml: 1, mt: 2, width: 'auto' }}
					/>
					<FormControl variant='standard' sx={{ ml: 1, mt: 2, width: 'auto' }}>
						<InputLabel id='icon-label'>Hobby Icon</InputLabel>
						<Select
							required
							id='icon'
							name='icon'
							defaultValue={item.icon || 'other'}
							onChange={handleItemChange}
							label='Hobby Icon'
						>
							{hobbyIcons.map((hobby, index) => {
								return (
									<MenuItem value={hobby} key={index}>
										{hobby}
									</MenuItem>
								);
							})}
						</Select>
					</FormControl>
				</Stack>
				<Button
					sx={{ mt: 1, mb: 1, ml: 1 }}
					onClick={() => handleSave(resumeItem)}
				>
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

export default HobbyItem;
