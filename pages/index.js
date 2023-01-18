import Head from 'next/head';
import styles from '@/styles/Home.module.css';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

import Header from '../components/header';

import data from '../pages/api/data';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

console.log(data);

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0}>
        <Header contactInfo={data.contact} />
        <Grid container spacing={2} xs={12} md={4}>
        <Grid item xs={12}>
          <Item>Sidebar for Education/Certs (Align Left)</Item>
        </Grid>
        <Grid item xs={12}>
          <Item>Sidebar for Skills (Align Left)</Item>
        </Grid>
        </Grid>
        <Grid container spacing ={2} xs={12} md={8}>
        <Grid item xs={12}>
          <Item>Work History Graph Here (Centered)</Item>
        </Grid>
        </Grid>
      </Grid>
    </Box>
      </main>
    </>
  )
}
