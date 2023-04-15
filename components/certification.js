import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListSubheader from '@mui/material/ListSubheader';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import GppGoodIcon from '@mui/icons-material/GppGood';
import SchoolIcon from '@mui/icons-material/School';

const Certification = (props) => {
	const certs = props.certs;

	return (
		<>
			{certs && (
				<List
					subheader={
						<ListSubheader>
							<Typography variant='h2'>Certifications</Typography>
						</ListSubheader>
					}
				>
					{certs.map((cert) => (
						<ListItem key={cert.id}>
							<ListItemAvatar>
								<Avatar>
									<a href={cert.link}>
										<GppGoodIcon />
									</a>
								</Avatar>
							</ListItemAvatar>
							<ListItemText
								primary={cert.title}
								secondary={`Date Achieved: ${cert.dateAchieved}`}
							/>
						</ListItem>
					))}
				</List>
			)}
		</>
	);
};

export default Certification;
