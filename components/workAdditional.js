import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { DialogContent, Typography } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Avatar from '@mui/material/Avatar';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

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
				<List>
					{additionalInfo?.map((info, index) => (
						<ListItem key={index} disableGutters>
							<ListItemAvatar>
								<Avatar>
									<WorkspacePremiumIcon color='action' />
								</Avatar>
							</ListItemAvatar>
							<ListItemText primary={info} />
						</ListItem>
					))}
				</List>
			</DialogContent>
		</Dialog>
	);
};

export default WorkAdditionalInfo;
