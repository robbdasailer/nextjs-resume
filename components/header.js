import Image from 'next/image';

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LinkIcon from '@mui/icons-material/Link';
import EmailIcon from '@mui/icons-material/Email';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const Header = (props) => {

  const {name, email, phone, linkedInUrl, githubUrl, genericUrl} = props.contactInfo;

    return (
        <>
        <Grid item xs={6} md={2}>
          <Item>
            <Image src="/assets/resumeProfile.jpeg" height={125} width={125}/>
          </Item>
        </Grid>
        <Grid item xs={6} md={10} justifyItems="flex-end">
          <Item>
            <p>{name}</p>
            <p>{phone}</p>
            {email && <EmailIcon />}
            {linkedInUrl && <LinkedInIcon />}
            {githubUrl && <GitHubIcon />}
            {genericUrl && <LinkIcon />}
          </Item>
        </Grid>
        </>
    );
}

export default Header;