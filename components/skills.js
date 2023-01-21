import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Slide from '@mui/material/Slide';
import InfoIcon from '@mui/icons-material/Info';
import CallToActionIcon from '@mui/icons-material/CallToAction';
import { Typography } from '@mui/material';
import Popover from '@mui/material/Popover';
import { useState } from 'react';

const Skills = (props) => {
	const skills = props.skills;

	const [anchorEl, setAnchorEl] = useState(null);
	const [blurb, setBlurb] = useState(null);

	const handlePopoverOpen = (event, blurb) => {
		setBlurb(blurb);
		setAnchorEl(event.currentTarget);
	};

	const handlePopoverClose = () => {
		setBlurb(null);
		setAnchorEl(null);
	};

	const open = Boolean(anchorEl);

	return (
		<>
			<Typography variant='h6' sx={{ml: 1.75}}>Skills & Competencies</Typography>
			{skills.map((skill) => (
				<Box key={skill.id} sx={{ width: '90%', m: 2 }}>
					<Typography
						aria-owns={open ? 'mouse-over-popover' : undefined}
						aria-haspopup='true'
						onMouseEnter={() => handlePopoverOpen(event, skill.blurb)}
						onMouseLeave={handlePopoverClose}
                        component='span'
					>
						{skill.skillName}<InfoIcon sx={{ml: 1, height: '1rem', width: '1rem'}} />
					</Typography>
					<Popover
						id='mouse-over-popover'
						sx={{
							pointerEvents: 'none',
						}}
						open={open}
						anchorEl={anchorEl}
						anchorOrigin={{
							vertical: 'bottom',
							horizontal: 'left',
						}}
						transformOrigin={{
							vertical: 'top',
							horizontal: 'left',
						}}
						onClose={handlePopoverClose}
                        disableRestoreFocus
					>
						<Typography sx={{ p: 1 }}>{blurb}</Typography>
					</Popover>
					<Slide direction='right' in={true}>
						<LinearProgress variant='determinate' value={skill.rating} />
					</Slide>
				</Box>
			))}
		</>
	);
};

export default Skills;
