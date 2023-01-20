import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListSubheader from '@mui/material/ListSubheader';
import Avatar from '@mui/material/Avatar';
import GppGoodIcon from '@mui/icons-material/GppGood';
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
                return <OutdoorGrillIcon />
            case 'beer':
                return <SportsBarIcon />
            case 'outdoor':
                return <NaturePeopleIcon />
            case 'family':
                return <Diversity1Icon />
            default:
                return <InterestsIcon />
        }
	};

    return (
        <>
			<List
				dense
				sx={{ bgcolor: 'background.paper' }}
				subheader={
					<ListSubheader sx={{ fontWeight: 600, fontSize: '1.1rem' }}>
						Hobbies & Interests
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