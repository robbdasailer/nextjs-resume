import { useState } from 'react';

import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { Typography } from '@mui/material';

const WorkAdditionalInfo = (props) => {
	const { additionalInfo, jobTitle } = props.job;

	const handleClose = () => {
		props.setOpen(false);
	};

	return (
		<Dialog onClose={handleClose} open={props.open}>
			<DialogTitle>{jobTitle}</DialogTitle>
			<Typography>{additionalInfo}</Typography>
		</Dialog>
	);
};

export default WorkAdditionalInfo;
