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

const SkillItem = (props) => {
	const { open, setOpen, transition, header, item, handleDelete, handleSave } =
		props;

	const [resumeItem, setResumeItem] = useState(item);

	const handleItemChange = (event) => {
		setResumeItem({ ...resumeItem, [event.target.name]: event.target.value });
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
					id='skillName'
                    name='skillName'
					label='Skill Name'
					onChange={handleItemChange}
					defaultValue={resumeItem.skillName}
					sx={{ ml: 1, mt: 2, mr: 1, width: 'auto' }}
				/>
                <Tooltip title='Give a brief summary of the skill here' arrow placement='top'>
				<TextField
					required
					id='blurb'
                    name='blurb'
					label='Skill Blurb'
					onChange={handleItemChange}
					defaultValue={resumeItem.blurb}
					sx={{ ml: 1, mt: 2, mr: 1, width: 'auto' }}
				/>
                </Tooltip>
                <InputLabel id='rating-label' sx={{mt: 2, textAlign: "center"}}>Skill Rating</InputLabel>
				<Slider
					name='rating'
					color='secondary'
					variant='determinate'
					defaultValue={resumeItem.rating}
					step={5}
					min={0}
					max={100}
					onChange={handleItemChange}
                    sx={{my: 1}}
				/>
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

export default SkillItem;
