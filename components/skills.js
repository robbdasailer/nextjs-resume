import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Slide from '@mui/material/Slide';
import InfoIcon from '@mui/icons-material/Info';
import CallToActionIcon from '@mui/icons-material/CallToAction';
import { Typography } from '@mui/material';
import Popper from '@mui/material/Popper';
import Fade from '@mui/material/Fade';
import { useState } from 'react';

const Skills = (props) => {
	const skills = props.skills;

	const [anchorEl, setAnchorEl] = useState(null);
	const [open, setOpen] = useState(false);
	const [blurb, setBlurb] = useState(null);

	const handlePopoverOpen = (event, blurb) => {
		setBlurb(blurb);
		setOpen((previousOpen) => !previousOpen);
		setAnchorEl(event.currentTarget);
	};

	const handlePopoverClose = () => {
		setBlurb(null);
		setAnchorEl(null);
	};

	return (
		<>
			<Typography variant='h6' sx={{ ml: 1.75 }}>
				Skills & Competencies
			</Typography>
			{skills.map((skill) => (
				<Box key={skill.id} sx={{ width: '90%', m: 2 }}>
					<Typography component='span'>
						{skill.skillName}
						<InfoIcon
							sx={{ ml: 1, height: '1rem', width: '1rem' }}
							aria-owns={open ? 'mouse-over-popover' : undefined}
							aria-haspopup='true'
							onClick={() => handlePopoverOpen(event, skill.blurb)}
						/>
					</Typography>
					<Popper
						id={skill.id}
						open={open}
						anchorEl={anchorEl}
						placement='left'
						modifiers={[
							{
								name: 'preventOverflow',
								enabled: true,
								options: {
									altAxis: true,
									altBoundary: true,
									tether: true,
									rootBoundary: 'viewport',
									padding: 8,
								},
							},
						]}
						transition
					>
						{({ TransitionProps }) => (
							<Fade {...TransitionProps} timeout={350}>
								<Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
									<Typography sx={{ p: 1 }}>{blurb}</Typography>
								</Box>
							</Fade>
						)}
					</Popper>
					<Slide direction='right' in={true}>
						<LinearProgress variant='determinate' value={skill.rating} />
					</Slide>
				</Box>
			))}
		</>
	);
};

export default Skills;
