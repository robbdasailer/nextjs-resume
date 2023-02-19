import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const ValidationDialog = (props) => {
	const { message, open, setOpen, transition, setCertsOpen } = props;

	const handleClose = () => {
		setCertsOpen(true);
	};

	return (
		<Dialog onClose={handleClose} open={open} >
			<DialogTitle>
				<Typography color='error'>Validation Error</Typography>
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
				<Stack>{message}</Stack>
				<Button onClick={setOpen}>Yes</Button>
				<Button sx={{ ml: 1 }} onClick={handleClose}>No</Button>
			</DialogContent>
		</Dialog>
	);
};

export default ValidationDialog;
