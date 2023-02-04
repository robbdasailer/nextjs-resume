import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListSubheader from '@mui/material/ListSubheader';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import SportsBarIcon from '@mui/icons-material/SportsBar';
import OutdoorGrillIcon from '@mui/icons-material/OutdoorGrill';
import NaturePeopleIcon from '@mui/icons-material/NaturePeople';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import InterestsIcon from '@mui/icons-material/Interests';

const Hobbies = (props) => {

    const hobbies = props.hobbies;

    const renderIcon = (icon) => {
		switch(icon) {
            case 'bbq':
                return <OutdoorGrillIcon color="action" />
            case 'beer':
                return <SportsBarIcon color="action" />
            case 'outdoor':
                return <NaturePeopleIcon color="action" />
            case 'family':
                return <Diversity1Icon color="action" />
            default:
                return <InterestsIcon color="action" />
        }
	};

    return (
        <>
			<List
				subheader={
					<ListSubheader>
						<Typography variant='h5'>Hobbies & Interests</Typography>
					</ListSubheader>
				}
			>
				{hobbies.map((hobby) => (
					<ListItem key={hobby.id}>
						<ListItemAvatar>
							<Avatar>
                                {renderIcon(hobby.icon)}
							</Avatar>
						</ListItemAvatar>
						<ListItemText
							primary={hobby.title}
						/>
					</ListItem>
				))}
			</List>
        </>
    )
}

export default Hobbies;