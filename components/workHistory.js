import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import AchievementIcon from '@mui/icons-material/WorkspacePremium';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import WorkIcon from '@mui/icons-material/Work';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';

const WorkHistory = (props) => {
	const jobs = props.jobs;
    const { linkedInUrl } = props.contact;

	return (
		<Timeline position='alternate'>
			{jobs.map((job) => (
				<TimelineItem key={job.id}>
					<TimelineOppositeContent
						color='white'
						variant='body2'
						sx={{ margin: 'auto 0' }}
					>
						{job.startDate} - {job.endDate || 'Present'}
					</TimelineOppositeContent>
					<TimelineSeparator>
						<TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
						<TimelineDot color='secondary'>
							{job.endDate ? (
								<WorkHistoryIcon sx={{ color: '#2DA2EC' }} />
							) : (
								<WorkIcon sx={{ color: '#1D4CB0' }} />
							)}
						</TimelineDot>
						<TimelineConnector />
					</TimelineSeparator>
					<TimelineContent sx={{ py: '12px', px: 2 }}>
						<Typography variant='h6' component='span'>
							<a href={job.companyLink}>{job.company}</a>: {job.jobTitle}
							{job.additionalInfo && (
								<AchievementIcon
									onClick={() => handleOpen(job)}
									sx={{
										cursor: 'pointer',
										color: '#1D4CB0',
										marginLeft: '.5rem',
										width: '1.25rem',
										height: '1.25rem',
									}}
								/>
							)}
						</Typography>
						<Typography>{job.jobDescription}</Typography>
					</TimelineContent>
				</TimelineItem>
			))}
			<TimelineItem>
				<TimelineSeparator>
					<TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
					<TimelineDot color='secondary'>
						<a href={linkedInUrl}><ReadMoreIcon /></a>
					</TimelineDot>
					<TimelineConnector />
				</TimelineSeparator>
				<TimelineContent sx={{ py: '12px', px: 2 }}>
					<Typography variant='h6' component='span'>
						Want to know more?
					</Typography>
					<Typography>Check out my full history on LinkedIn!</Typography>
				</TimelineContent>
			</TimelineItem>
		</Timeline>
	);
};

export default WorkHistory;
