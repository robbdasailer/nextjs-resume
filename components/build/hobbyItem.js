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
import Tooltip from '@mui/material/Tooltip';

const HobbyItem = (props) => {
	const { open, setOpen, transition, header, item, handleDelete, handleSave } =
		props;

	const [resumeItem, setResumeItem] = useState(item);

	const handleItemChange = (event) => {
		setResumeItem({ ...resumeItem, [event.target.id]: event.target.value });
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
				<TextField
					required
					id='company'
					label='Company Name'
					onChange={handleItemChange}
					defaultValue={resumeItem.company}
					sx={{ ml: 1, mt: 2, width: '25rem' }}
				/>
				<TextField
					required
					id='companyUrl'
					label='Company URL'
					onChange={handleItemChange}
					defaultValue={resumeItem.companyLink}
					sx={{ ml: 1, mt: 2, width: '25rem' }}
				/>
				<TextField
					required
					id='jobTitle'
					label='Job Title'
					onChange={handleItemChange}
					defaultValue={resumeItem.jobTitle}
					sx={{ ml: 1, mt: 2, width: '50.4rem' }}
				/>
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
