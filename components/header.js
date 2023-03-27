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
			<Grid item xs={6} md={2}>
				<Paper sx={{ textAlign: 'center' }}>
					<Image
						src='/assets/resumeProfile.jpeg'
						height={125}
						width={125}
						alt={name}
					/>
				</Paper>
			</Grid>
			<Grid item xs={6} md={10}>
				<Paper sx={{ textAlign: 'right' }}>
					<Typography variant='h1'>{name}</Typography>
					{phone && <Typography variant='h3'>{phone}</Typography>}
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
				</Paper>
			</Grid>
		</>
	);
};

export default Header;
