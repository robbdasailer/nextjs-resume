import * as React from 'react';
import { useState, useCallback, useEffect } from 'react';
import Head from 'next/head';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Slide from '@mui/material/Slide';

import Header from '../components/header';
import Education from '../components/education';
import Skills from '../components/skills';
import Hobbies from '../components/hobbies';
import WorkHistory from '../components/workHistory';
import WorkHistoryMobile from '../components/workHistoryMobile';

import data from '../pages/api/data';

export default function Home() {

	const mediaBreakPoint = 600;

	const dialogTransition = React.forwardRef(function Transition(props, ref) {
		return <Slide direction='up' ref={ref} {...props} />;
	});

	//Function used to determine which Work History module to display based on screen size
	const useMediaQuery = (width) => {
		const [targetReached, setTargetReached] = useState(false);

		const updateTarget = useCallback((e) => {
			if (e.matches) {
				setTargetReached(true);
			} else {
				setTargetReached(false);
			}
		}, []);

		useEffect(() => {
			const media = window.matchMedia(`(max-width: ${width}px)`);
			media.addEventListener('change', updateTarget);

			// Check on mount (callback is not called until a change occurs)
			if (media.matches) {
				setTargetReached(true);
			}

			return () => media.removeEventListener('change', updateTarget);
		}, []);

		return targetReached;
	};

	const isBreakpoint = useMediaQuery(mediaBreakPoint);

	return (
		<>
			<Head>
				<title>{data.contact.name}</title>
				<meta name='description' content='Online Resume' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main>
				<Box sx={{ flexGrow: 1 }}>
					<Grid container spacing={2} sx={{ alignItems: 'flex-start' }}>
						<Header contactInfo={data.contact} />
						<Grid item container xs={12} md={3} spacing={2}>
							<Grid item xs={12}>
								<Paper>
									<Education
										education={data.education}
										certs={data.certifications}
									/>
								</Paper>
							</Grid>
							<Grid item xs={12}>
								<Paper>
									<Skills skills={data.skills} />
								</Paper>
							</Grid>
							<Grid item xs={12}>
								<Paper>
									<Hobbies hobbies={data.hobbies} />
								</Paper>
							</Grid>
						</Grid>
						<Grid item container xs={12} md={9}>
							<Grid item xs={12}>
								<Paper>
									{isBreakpoint ? (
										<WorkHistoryMobile
											jobs={data.workHistory}
											transition={dialogTransition}
										/>
									) : (
										<WorkHistory
											jobs={data.workHistory}
											contact={data.contact}
											transition={dialogTransition}
										/>
									)}
								</Paper>
							</Grid>
						</Grid>
					</Grid>
				</Box>
			</main>
		</>
	);
}
