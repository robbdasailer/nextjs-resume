import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListSubheader from '@mui/material/ListSubheader';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import GppGoodIcon from '@mui/icons-material/GppGood';
import SchoolIcon from '@mui/icons-material/School';

const Engagement = (props) => {
	const engagements = props.engagements;

	return (
		<>
			{engagements && (
				<List
					subheader={
						<ListSubheader>
							<Typography variant='h2'>Engagement</Typography>
						</ListSubheader>
					}
				>
					{engagements.map((engagement) => (
						<ListItem key={engagement.id}>
							<ListItemAvatar>
								<Avatar>
									<a href={engagement.link}>
										<GppGoodIcon />
									</a>
								</Avatar>
							</ListItemAvatar>
							<ListItemText
								primary={engagement.title}
								secondary={engagement.date}
							/>
						</ListItem>
					))}
				</List>
			)}
		</>
	);
};

export default Engagement;
