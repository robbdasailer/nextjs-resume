import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const SubmitItem = (props) => {
	const { resumeData, open, setOpen, transition } = props;

	const dataString =
		'let data = ' + JSON.stringify(resumeData) + ';\n\nexport default data;';

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
				Copy the full content below into the data.js file under the API
				directory to update:
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
			<DialogContent>{dataString}</DialogContent>
		</Dialog>
	);
};

export default SubmitItem;
