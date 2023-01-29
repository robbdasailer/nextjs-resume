import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { DialogContent, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const WorkAdditionalInfo = (props) => {
	const { additionalInfo, jobTitle } = props.job;

	const handleClose = () => {
		props.setOpen(false);
	};

	return (
		<Dialog
			onClose={handleClose}
			open={props.open}
			TransitionComponent={props.transition}
		>
			<DialogTitle>
				{jobTitle}
				{props.open ? (
					<IconButton
						aria-label='close'
						onClick={handleClose}
						sx={{
							position: 'absolute',
							right: 8,
							top: 8,
							color: (theme) => theme.palette.grey[500],
						}}
					>
						<CloseIcon />
					</IconButton>
				) : null}
			</DialogTitle>
			<DialogContent>
				<Typography>{additionalInfo}</Typography>
			</DialogContent>
		</Dialog>
	);
};

export default WorkAdditionalInfo;
