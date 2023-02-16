import { useState } from 'react';

import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { DialogContent, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';

const WorkHistoryItem = (props) => {
	const { open, setOpen, transition, header, item, handleDelete, handleUpdate} = props;

	const [resumeItem, setResumeItem] = useState(item);

	const handleItemUpdate = (event) => {
        console.log(resumeItem)
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
					id='companyName'
					label='Company Name'
                    onChange={handleItemUpdate}
					defaultValue={resumeItem.company}
					sx={{ ml: 1, mt: 2, width: '25rem' }}
				/>
				<TextField
					required
					id='companyUrl'
					label='Company URL'
					defaultValue={resumeItem.companyLink}
					sx={{ ml: 1, mt: 2, width: '25rem' }}
				/>
				<TextField
					required
					id='jobTitle'
					label='Job Title'
					defaultValue={resumeItem.jobTitle}
					sx={{ ml: 1, mt: 2, width: '50.4rem' }}
				/>
				<TextField
					id='startDate'
					label='Start Date'
					type='date'
					defaultValue="2017-05-24"
					sx={{ ml: 1, mt: 2, width: '10rem' }}
					InputLabelProps={{
						shrink: true,
					}}
				/>
				<TextField
					id='endDate'
					label='End Date'
					type='date'
					defaultValue="2017-05-24"
					sx={{ ml: 1, mt: 2, width: '10rem' }}
					InputLabelProps={{
						shrink: true,
					}}
				/>
				<TextField
					id='standard-multiline-static'
					label='Job Description'
					multiline
					rows={5}
					defaultValue={resumeItem.jobDescription}
					sx={{ ml: 1, mt: 2, width: '50.4rem' }}
				/>
				<TextField
					id='standard-multiline-static'
					label='Additional Info'
					multiline
					rows={3}
					defaultValue={resumeItem.additionalInfo}
					sx={{ ml: 1, mt: 2, width: '50.4rem' }}
				/>
				<Button sx={{ mt: 1, mb: 1, ml: 1 }}>
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

export default WorkHistoryItem;
