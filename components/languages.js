import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Slide from '@mui/material/Slide';
import InfoIcon from '@mui/icons-material/Info';
import Typography from '@mui/material/Typography';
import Popper from '@mui/material/Popper';
import Fade from '@mui/material/Fade';
import { useState } from 'react';

const Languages = (props) => {
	const languages = props.languages;

	const [anchorEl, setAnchorEl] = useState(null);
	const [open, setOpen] = useState(false);
	const [blurb, setBlurb] = useState(null);

	const handlePopperOpen = (event, blurb) => {
		setBlurb(blurb);
		setOpen(true);
		setAnchorEl(event.currentTarget);
	};

	const handlePopperClose = () => {
		setOpen(false);
		setBlurb(null);
		setAnchorEl(null);
	};

	return (
		<>
			<List
				subheader={
					<ListSubheader>
						<Typography variant='h2'>Languages</Typography>
					</ListSubheader>
					
				}
			>
				{languages.map((language) => (
					<Box key={language.id} sx={{ width: '90%', ml: 3, mt: 2, mb: 2 }}>
						<Typography
							component='span'
							onMouseEnter={(event) => handlePopperOpen(event, language.blurb)}
							onMouseLeave={handlePopperClose}
						>
							{language.languageName}
						</Typography>
						<Popper
							id={language.id}
							open={anchorEl && open && anchorEl.id === language.id}
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
								<Fade {...TransitionProps} timeout={0}>
									<Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
										<Typography sx={{ p: 1 }}>{blurb}</Typography>
									</Box>
								</Fade>
							)}
						</Popper>
						<Slide direction='right' in={true}>
						<LinearProgress
							color='action'
							variant='determinate'
							value={language.rating}
						/>						
						</Slide>
					</Box>
				))}
			</List>
		</>
	);
};

export default Languages;
