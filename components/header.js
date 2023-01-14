import Image from 'next/image';

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const Header = () => {
    return (
        <>
        <Grid item xs={4} md={2}>
          <Item>xs=4 md=2</Item>
        </Grid>
        <Grid item xs={8} md={10}>
          <Item>xs=8 md=10</Item>
        </Grid>
        </>
    );
}

export default Header;