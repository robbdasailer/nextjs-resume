import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { DialogContent, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const WorkHistoryItem = (props) => {

    const {open, setOpen, transition, header} = props

    const handleClose = () => {
		setOpen(false);
	};

    return (
        <Dialog
        onClose={handleClose}
        open={open}
        TransitionComponent={transition}
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
        </DialogContent>
    </Dialog>
    )
}

export default WorkHistoryItem