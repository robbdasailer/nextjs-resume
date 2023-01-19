import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListSubheader from '@mui/material/ListSubheader';
import Avatar from '@mui/material/Avatar';
import GppGoodIcon from '@mui/icons-material/GppGood';
import SchoolIcon from '@mui/icons-material/School';

const Education = (props) => {

    const {school, schoolUrl, degree, graduationYear} = props.education
    const certs = props.certs;

    return (
        <>
        <Avatar><a href={schoolUrl}><SchoolIcon /></a></Avatar>
        <h4>{school}</h4>
        <p>{degree}</p>
        <p>Graduation Year: {graduationYear}</p>
        <List sx={{ bgcolor: 'background.paper' }} subheader={<ListSubheader>Certifications</ListSubheader>}>
            {certs.map(cert => (
                <ListItem key={cert.id}>
                    <ListItemAvatar>
                        <Avatar>
                            <a href={cert.link}><GppGoodIcon /></a>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={cert.title} secondary={cert.expires} />
                </ListItem>
            ))}
        </List>
        </>
    )
}

export default Education;