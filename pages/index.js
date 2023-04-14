import * as React from 'react';
import { useState, useCallback, useEffect, useRef } from 'react';
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
import { convertToSortableDate } from '../utils/resumeDataHelper';

export default function Home() {
	const [workHistoryHeight, setWorkHistoryHeight] = useState(0);
	const leftContainerRef = useRef(null);

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

	//Dynamically set work history paper length to match left side
	//The subtraction of 24 pixels may need to be adjusted if the spacing between containers is changed
	useEffect(() => {
		if (leftContainerRef.current) {
			setWorkHistoryHeight(leftContainerRef.current.clientHeight - 24);
			console.log(leftContainerRef.current.clientHeight);
		}
	}, [leftContainerRef]);

	const isBreakpoint = useMediaQuery(mediaBreakPoint);

	let sortedWorkHistory = data.workHistory.sort(
		(a, b) =>
			convertToSortableDate(b.startDate) - convertToSortableDate(a.startDate)
	);
	let sortedCerts = data.certifications.sort(
		(a, b) =>
			convertToSortableDate(a.dateAchieved) -
			convertToSortableDate(b.dateAchieved)
	);
	let sortedEducation = data.education.sort(
		(a, b) => parseInt(a.graduationYear) - parseInt(b.graduationYear)
	);

	if (process.env.NEXT_PUBLIC_SORT_IS_DESC == 'true') {
		sortedCerts = sortedCerts.reverse();
		sortedEducation = sortedEducation.reverse();
	}

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
						<Grid item container spacing={2} ref={leftContainerRef}>
							<Grid item container xs={12} md={3} spacing={2}>
								<Grid item xs={12}>
									<Paper>
										<Education
											education={sortedEducation}
											certs={sortedCerts}
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
									{isBreakpoint ? (
										<Paper>
											<WorkHistoryMobile
												jobs={sortedWorkHistory}
												transition={dialogTransition}
											/>
										</Paper>
									) : (
										<Paper sx={{ minHeight: `${workHistoryHeight}px` }}>
											<WorkHistory
												jobs={sortedWorkHistory}
												contact={data.contact}
												transition={dialogTransition}
											/>
										</Paper>
									)}
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Box>
			</main>
		</>
	);
}
