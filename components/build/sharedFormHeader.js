import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';

import WorkHistoryItem from './workHistoryItem';

const SharedFormHeader = (props) => {

    const {header, open, setOpen, transition} = props;

    const handleOpen = () => {
        setOpen(true)
    }

    const renderForm = (section) => {
		switch (section) {
			case 'Education':
				return console.log("Education Item Form Here");
			case 'Certificaitons':
				return console.log("Certification Item Form Here");
			case 'Hobbies':
				return console.log("Hobby Item Form Here");
			case 'Skills':
				return console.log("Skill Item Form Here");
			default:
				return <WorkHistoryItem open={open} setOpen={setOpen} transition={transition} header={header}/>;
		}
	};

    return (
        <Typography variant='h3' ml={5} mb={1} mt={1}>
        {header}
        <Button sx={{ ml: 5}} onClick={handleOpen}>
            <AddIcon></AddIcon>
            Add Item
        </Button>
        {renderForm(header)}
    </Typography>
    )
}

export default SharedFormHeader