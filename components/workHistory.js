import { useState } from 'react';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent, {
	timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import WorkIcon from '@mui/icons-material/Work';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import Button from '@mui/material/Button';

import WorkAdditionalInfo from './workAdditional';

const WorkHistory = (props) => {
	const [open, setOpen] = useState(false);
	const [currentJob, setCurrentJob] = useState('');

	const jobs = props.jobs;
	const { linkedInUrl } = props.contact;

	const handleOpen = (jobId) => {
		setCurrentJob(
			jobs.find((job) => {
				return jobId === job.id;
			})
		);
		setOpen(true);
	};

	return (
		<List 
			subheader={
				<ListSubheader>
					<Typography variant='h2'>Professional Experience</Typography>
				</ListSubheader>
			}
		>
			
		<Timeline
			sx={{
				[`& .${timelineOppositeContentClasses.root}`]: {
					flex: 0.2,
				},
			}}
		>
			{jobs.map((job) => (
				<TimelineItem key={job.id}>
					<TimelineOppositeContent variant='h5' sx={{ margin: '25px 0px 25px 0px', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingLeft: '3rem' }}>

							{job.startDate} - {job.endDate || 'Present'}
						</TimelineOppositeContent>
					<TimelineSeparator sx={{verticalAlign: 'bottom'}}>
						<TimelineConnector />
						{job.endDate ? (
							<TimelineDot color='primary'>
								<WorkHistoryIcon color='action' />
							</TimelineDot>
						) : (
							<TimelineDot color='secondary'>
								<WorkIcon color='action' />
							</TimelineDot>
						)}
						<TimelineConnector />
					</TimelineSeparator>
					<TimelineContent sx={{ margin: '25px 0px 25px 0px', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingLeft: '3rem' }}>
						<Typography variant='h5' component='span'>
							<a href={job.companyLink}>{job.company}</a>: {job.jobTitle}
						</Typography>
						<Typography>{job.jobDescription}</Typography>
						{job.additionalInfo && (
							<>
								<Button  sx={{ width: 'fit-content' }} onClick={() => handleOpen(job.id)}>
									<Typography>View Accomplishments</Typography>
								</Button>
								<WorkAdditionalInfo
									open={open}
									job={currentJob}
									setOpen={setOpen}
									transition={props.transition}
								/>
							</>
						)}
					</TimelineContent>
				</TimelineItem>
			))}
		</Timeline>

		</List>
	);
};

export default WorkHistory;
