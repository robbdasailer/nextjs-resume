import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListSubheader from '@mui/material/ListSubheader';
import Avatar from '@mui/material/Avatar';
import GppGoodIcon from '@mui/icons-material/GppGood';
import SchoolIcon from '@mui/icons-material/School';

const Education = (props) => {

    const degrees = props.education;
    const certs = props.certs;

    return (
        <>
        <List dense sx={{ bgcolor: 'background.paper' }} subheader={<ListSubheader sx={{fontWeight: 600, fontSize: '1.1rem'}}>Education</ListSubheader>}>
            {degrees.map(degree => (
                <ListItem key={degree.id}>
                    <ListItemAvatar>
                        <Avatar>
                            <a href={degree.schoolUrl}><SchoolIcon /></a>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={degree.school} secondary={`${degree.degree}: ${degree.graduationYear}`} />
                </ListItem>
            ))}
        </List>
        <List dense sx={{ bgcolor: 'background.paper' }} subheader={<ListSubheader sx={{fontWeight: 600, fontSize: '1.1rem'}}>Certifications</ListSubheader>}>
            {certs.map(cert => (
                <ListItem key={cert.id}>
                    <ListItemAvatar>
                        <Avatar>
                            <a href={cert.link}><GppGoodIcon /></a>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={cert.title} secondary={`Date Achieved: ${cert.dateAchieved}`} />
                </ListItem>
            ))}
        </List>
        </>
    )
}

export default Education;