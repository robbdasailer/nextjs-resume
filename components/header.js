import Image from 'next/image';

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LinkIcon from '@mui/icons-material/Link';
import EmailIcon from '@mui/icons-material/Email'; 

const Header = (props) => {
	const { name, email, phone, linkedInUrl, githubUrl, genericUrl } =
		props.contactInfo;

	return (
		<>
			<Grid item xs={6} md={12}>
			<Paper sx={{ textAlign: 'center', height: '80vh'}}>
				<div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%'}}>
					<Image
					src='/assets/resumeProfile.jpg'
					height={500}
					width={500}
					alt={name}
					/>
					<Typography variant='h1' sx={{ padding: '20px' }}>{name}</Typography>
					<div>
					{email && (
					<a href={`mailto:${email}`}>
						<EmailIcon />
					</a>
					)}
					{linkedInUrl && (
					<a href={linkedInUrl}>
						<LinkedInIcon />
					</a>
					)}
					{githubUrl && (
					<a href={githubUrl}>
						<GitHubIcon />
					</a>
					)}
					{genericUrl && (
					<a href={genericUrl}>
						<LinkIcon />
					</a>
					)}
						</div>
				</div>
				</Paper>

			</Grid>
		</>
	);
};

export default Header;
