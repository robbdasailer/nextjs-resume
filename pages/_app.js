import Head from 'next/head';
import { useState, useEffect } from 'react';

import { CacheProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

import { lightTheme, darkTheme } from '../utils/theme';
import createEmotionCache from '../utils/createEmotionCache';

import 'typeface-oswald';
import 'typeface-raleway';
import 'typeface-poppins';
import 'typeface-inconsolata';
import 'typeface-inter';
import 'typeface-montserrat';
import 'typeface-roboto-slab';
import 'typeface-work-sans';
import React from 'react';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
	const [darkMode, setDarkMode] = useState(true);

	const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
	
	//Set theme based on value from config
	useEffect(() => {
		if (process.env.NEXT_PUBLIC_DARKMODE_ENABLE == 'auto') {
			setDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
		} else if (process.env.NEXT_PUBLIC_DARKMODE_ENABLE == 'true') {
			setDarkMode(true)
		} else {
			setDarkMode(false)
		}
	}, [darkMode]);

	return (
		<CacheProvider value={emotionCache}>
			<Head>
				<meta name='viewport' content='initial-scale=1, width=device-width' />
			</Head>
			<ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
				<CssBaseline />
				<Component {...pageProps} />
			</ThemeProvider>
		</CacheProvider>
	);
}
