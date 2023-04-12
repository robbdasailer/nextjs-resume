import { useCallback, useState } from 'react';

import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Tooltip from '@mui/material/Tooltip';

import {
	convertFromSimpleArray,
	convertToSimpleArray,
	convertToDatePickerInput,
	validateItem,
} from '../../utils/resumeDataHelper';

const WorkHistoryItem = (props) => {
	const { open, setOpen, transition, header, item, handleDelete, handleSave } =
		props;

	const [resumeItem, setResumeItem] = useState(item);
	const [checked, setChecked] = useState(!resumeItem.endDate);
	const [isValid, setIsValid] = useState(true);

	const timeOptions = {
		year: 'numeric',
		month: 'short',
	};

	const handleItemChange = (event) => {
		setResumeItem({ ...resumeItem, [event.target.id]: event.target.value });
	};

	const handleDateChange = (event) => {
		console.log('Date Changed');
		const date = new Date(event.target.value);
		setResumeItem({
			...resumeItem,
			[event.target.id]: date.toLocaleString('en-GB', timeOptions),
		});
	};

	const handleChecked = useCallback((event) => {
		setChecked(event.target.checked);
		if (event.target.checked) {
			setResumeItem({ ...resumeItem, endDate: '' });
		} else {
			setResumeItem({
				...resumeItem,
				endDate: new Date().toLocaleString('en-GB', timeOptions),
			});
		}
	}, []);

	const handleAdditionalInfoChange = (event) => {
		setResumeItem({
			...resumeItem,
			[event.target.id]: convertToSimpleArray(event.target.value),
		});
	};

	const handleValidate = () => {
		var itemIsValid = validateItem(resumeItem, [
			'company',
			'companyLink',
			'startDate',
			'jobTitle',
			'jobDescription',
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
					error={!isValid}
					required
					id='company'
					label='Company Name'
					onChange={handleItemChange}
					defaultValue={resumeItem.company}
					sx={{ ml: 1, mt: 2, width: '25rem' }}
				/>
				<TextField
					error={!isValid}
					required
					id='companyLink'
					label='Company URL'
					onChange={handleItemChange}
					defaultValue={resumeItem.companyLink}
					sx={{ ml: 1, mt: 2, width: '25rem' }}
				/>
				<TextField
					error={!isValid}
					required
					id='jobTitle'
					label='Job Title'
					onChange={handleItemChange}
					defaultValue={resumeItem.jobTitle}
					sx={{ ml: 1, mt: 2, width: '50.4rem' }}
				/>
				<Tooltip title='Day will not be displayed' arrow placement='top'>
					<TextField
						error={!isValid}
						required
						id='startDate'
						label='Start Date'
						type='date'
						defaultValue={convertToDatePickerInput(resumeItem.startDate)}
						onChange={handleDateChange}
						sx={{ ml: 1, mt: 2, width: '19rem' }}
						InputLabelProps={{
							shrink: true,
						}}
					/>
				</Tooltip>
				<Tooltip title='Day will not be displayed' arrow placement='top'>
					<TextField
						id='endDate'
						label='End Date'
						type='date'
						defaultValue={convertToDatePickerInput(resumeItem.endDate)}
						onChange={handleDateChange}
						disabled={checked}
						sx={{ ml: 1, mt: 2, width: '19rem' }}
						InputLabelProps={{
							shrink: true,
						}}
					/>
				</Tooltip>
				<FormControlLabel
					label='Current Position'
					control={
						<Checkbox
							checked={checked}
							onChange={handleChecked}
							color='secondary'
						/>
					}
					sx={{ ml: 3, mr: 1, mt: 3.5, width: '12rem' }}
				/>
				<TextField
					error={!isValid}
					required
					id='jobDescription'
					label='Job Description'
					multiline
					rows={5}
					onChange={handleItemChange}
					defaultValue={resumeItem.jobDescription}
					sx={{ ml: 1, mt: 2, width: '50.4rem' }}
				/>
				<Tooltip
					title='A simple semi-colon (;) delimited list of achievemnts'
					arrow
					placement='top'
				>
					<TextField
						id='additionalInfo'
						label='Additional Info'
						multiline
						rows={3}
						defaultValue={convertFromSimpleArray(resumeItem.additionalInfo)}
						onChange={handleAdditionalInfoChange}
						sx={{ ml: 1, mt: 2, width: '50.4rem' }}
					/>
				</Tooltip>
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

export default WorkHistoryItem;
