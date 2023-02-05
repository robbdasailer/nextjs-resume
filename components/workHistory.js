import { useState } from 'react';

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
		<Timeline
			sx={{
				[`& .${timelineOppositeContentClasses.root}`]: {
					flex: 0.2,
				},
			}}
		>
			{jobs.map((job) => (
				<TimelineItem key={job.id}>
					<TimelineOppositeContent variant='h5' sx={{ margin: 'auto 0' }}>
						{job.startDate} - {job.endDate || 'Present'}
					</TimelineOppositeContent>
					<TimelineSeparator>
						<TimelineConnector />
						{job.endDate ? (
							<TimelineDot color='primary'>
								<WorkHistoryIcon />
							</TimelineDot>
						) : (
							<TimelineDot color='secondary'>
								<WorkIcon color='action' />
							</TimelineDot>
						)}
						<TimelineConnector />
					</TimelineSeparator>
					<TimelineContent sx={{ py: 1, px: 2.65 }}>
						<Typography variant='h5' component='span'>
							<a href={job.companyLink}>{job.company}</a>: {job.jobTitle}
						</Typography>
						<Typography>{job.jobDescription}</Typography>
						{job.additionalInfo && (
							<>
								<Button onClick={() => handleOpen(job.id)}>
									View Accomplishments
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
			<TimelineItem>
				<TimelineOppositeContent></TimelineOppositeContent>
				<TimelineSeparator>
					<TimelineConnector />
					<TimelineDot color='secondary'>
						<ReadMoreIcon color='action' />
					</TimelineDot>
					<TimelineConnector />
				</TimelineSeparator>
				<TimelineContent sx={{ py: 2, px: 2.65 }}>
					<Typography variant='h5' component='span'>
						Want to know more?
					</Typography>
					<Typography>
						Check out my full history on <a href={linkedInUrl}>LinkedIn!</a>
					</Typography>
				</TimelineContent>
			</TimelineItem>
		</Timeline>
	);
};

export default WorkHistory;
