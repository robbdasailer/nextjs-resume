import { useState } from 'react';

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
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
		console.log({ jobId });
		setCurrentJob(
			jobs.find((job) => {
				return jobId === job.id;
			})
		);
		setOpen(true);
	};

	return (
		<Timeline position='alternate'>
			{jobs.map((job) => (
				<TimelineItem key={job.id}>
					<TimelineOppositeContent variant='h6' sx={{ margin: 'auto 0' }}>
						{job.startDate} - {job.endDate || 'Present'}
					</TimelineOppositeContent>
					<TimelineSeparator>
						<TimelineConnector />
						<TimelineDot color='secondary'>
							{job.endDate ? <WorkHistoryIcon /> : <WorkIcon />}
						</TimelineDot>
						<TimelineConnector />
					</TimelineSeparator>
					<TimelineContent sx={{ py: '12px', px: 2 }}>
						<Typography variant='h6' component='span'>
							<a href={job.companyLink}>{job.company}</a>: {job.jobTitle}
						</Typography>
						<Typography>
							{job.jobDescription}{' '}
							{job.additionalInfo && (
								<>
									<Button
										variant='contained'
										onClick={() => handleOpen(job.id)}
									>
										...Click to see more!
									</Button>
									<WorkAdditionalInfo
										open={open}
										job={currentJob}
										setOpen={setOpen}
										transition={props.transition}
									/>
								</>
							)}
						</Typography>
					</TimelineContent>
				</TimelineItem>
			))}
			<TimelineItem>
				<TimelineOppositeContent></TimelineOppositeContent>
				<TimelineSeparator>
					<TimelineConnector />
					<TimelineDot color='secondary'>
						<ReadMoreIcon />
					</TimelineDot>
					<TimelineConnector />
				</TimelineSeparator>
				<TimelineContent sx={{ py: '12px', px: 2 }}>
					<Typography variant='h6' component='span'>
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
