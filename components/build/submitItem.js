import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CloseIcon from '@mui/icons-material/Close';

const SubmitItem = (props) => {
	const { resumeData, open, setOpen, transition } = props;

	const dataString =
		'let data = ' + JSON.stringify(resumeData, null, "  ") + ';\n\nexport default data;';

	const handleClose = () => {
		setOpen(false);
	};

	const handleCopy = () => {
		navigator.clipboard.writeText(dataString)
	};

	return (
		<Dialog
			onClose={handleClose}
			open={open}
			fullWidth
			maxWidth='md'
		>
			<DialogTitle>
				<IconButton onClick={handleCopy}>
				<ContentCopyIcon />
				</IconButton>
				Copy and replace all text in the data.js file
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
			<DialogContent><pre>{dataString}</pre></DialogContent>
		</Dialog>
	);
};

export default SubmitItem;
