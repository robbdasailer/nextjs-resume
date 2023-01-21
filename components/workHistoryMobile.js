import { useState } from 'react';

import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import WorkIcon from '@mui/icons-material/Work';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';

const WorkHistoryMobile = (props) => {
	const [activeStep, setActiveStep] = useState(0);

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleReset = () => {
		setActiveStep(0);
	};

	const renderIcon = (endDate) => {
		return endDate ? <WorkHistoryIcon /> : <WorkIcon />;
	};

	const jobs = props.jobs;

	return (
		<Box sx={{ maxWidth: 1500 }}>
			<Stepper activeStep={activeStep} orientation='vertical'>
				{jobs.map((job, index) => (
					<Step key={job.id}>
						<StepLabel
							optional={
								job.id === 3 ? (
									<Typography variant='caption'>Last step</Typography>
								) : null
							}
							StepIconComponent={() => renderIcon(job.endDate)}
						>
							<Typography variant='h6' component='span'>
								<a href={job.companyLink}>{job.company}</a>: {job.jobTitle}
							</Typography>
							<Typography>
								{job.startDate} - {job.endDate || 'Present'}
							</Typography>
						</StepLabel>
						<StepContent>
							<Typography>{job.jobDescription}</Typography>
							<Box sx={{ mb: 2 }}>
								<div>
									<Button
										variant='contained'
										onClick={handleNext}
										sx={{ mt: 1, mr: 1 }}
									>
										{index === jobs.length - 1 ? 'Finish' : 'View Next'}
									</Button>
									<Button
										disabled={index === 0}
										onClick={handleBack}
										sx={{ mt: 1, mr: 1 }}
									>
										View Previous
									</Button>
								</div>
							</Box>
						</StepContent>
					</Step>
				))}
			</Stepper>
			{activeStep === jobs.length && (
				<Paper square elevation={0} sx={{ p: 3 }}>
					<Typography>All steps completed - you&apos;re finished</Typography>
					<Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
						View Current Position
					</Button>
				</Paper>
			)}
		</Box>
	);
};

export default WorkHistoryMobile;
