import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import GppGoodIcon from '@mui/icons-material/GppGood';
import SchoolIcon from '@mui/icons-material/School';

const Education = (props) => {

    const {school, schoolUrl, degree, graduationYear} = props.education

    return (
        <>
        <a href={schoolUrl}><SchoolIcon />{school}</a>
        <p>{degree}</p>
        <p>{graduationYear}</p>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <GppGoodIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Photos" secondary="Jan 9, 2014" />
            </ListItem>
        </List>
        </>
    )
}

export default Education;