import { useState, useStateCallback } from 'react';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const StyledBox = styled(Box)(({ theme }) => ({
	...theme.typography.body2,
	display: 'flex',
	flexWrap: 'wrap',
	justifyContent: 'space-around',
	alignSelf: 'flex-start',
}));

const contactItems = [
	'name',
	'email',
	'phone',
	'githubUrl',
	'linkedInUrl',
	'genericUrl',
];

const educationItems = ['school', 'schoolUrl', 'degree', 'graduationYear'];

const certificationItems = [
	'Certification Name',
	'Certification Url',
	'Date Achieved',
];

const hobbyIcons = [
	'bbq',
	'beer',
	'outdoor',
	'family',
	'music',
	'tech',
	'hiking',
	'music',
	'other',
];

const skillItems = ['Skill Name', 'Skill Details'];

const workHistoryItems = [
	'Company Name',
	'Company Link',
	'Start Date',
	'End Date',
	'Description',
	'Achievements',
];

const Build = () => {
	const [resumeData, setResumeData] = useState({
		contact: {},
		education: [],
		certifications: [],
		hobbies: [],
		skills: [],
		workHistory: [],
	});
	const [educationCount, setEducationCount] = useState(1);
	const [educationRow, setEducationRow] = useState({});
	const [certificationCount, setCertificationCount] = useState(0);
	const [hobbyCount, setHobbyCount] = useState(1);
	const [hobbyRow, setHobbyRow] = useState({ icon: 'other' });
	const [skillCount, setSkillCount] = useState(1);
	const [skillsOpen, setSkillsOpen] = useState(false);
	const [workHistoryCount, setWorkHistoryCount] = useState(1);
	const [icon, setIcon] = useState('');

	const handleIconUpdate = (event) => {
		setIcon(event.target.value);
		handleHobbyRowUpdate;
	};

	const handleContactUpdate = (event) => {
		let contactData = {
			...resumeData.contact,
			[event.target.id]: event.target.value,
		};
		setResumeData({ ...resumeData, contact: contactData });
		console.log({ resumeData });
	};

	const handleEducationUpdate = (countDelta) => {
		setEducationCount(educationCount + countDelta);
		if (countDelta > 0) {
			setEducationRow({ ...educationRow, id: educationCount });
			let updatedArray = resumeData.education.push(educationRow);
			setResumeData({ ...resumeData, updatedArray });
		} else if (countDelta < 0 && resumeData.education.length > 1) {
			let updatedArray = resumeData.education.pop();
			setResumeData({ ...resumeData, updatedArray });
		}
		setEducationRow({});
		console.log(resumeData);
	};

	const handleEducationRowUpdate = () => {
		setEducationRow({ ...educationRow, [event.target.id]: event.target.value });
		if (!educationRow.id) {
			setEducationRow({ ...educationRow, id: educationCount });
		}
	};

	const renderEducation = () => {
		const educationEntries = [];
		for (let i = 0; i < educationCount; i++) {
			educationEntries.push(
				educationItems.map((educationItem, index) => (
					<TextField
						key={index}
						required={true}
						id={educationItem}
						label={educationItem}
						defaultValue=''
						onChange={handleEducationRowUpdate}
					/>
				))
			);
		}
		return educationEntries;
	};

	const handleHobbyRowUpdate = () => {
		setHobbyRow({ ...hobbyRow, [event.target.id]: event.target.value });
		if (!hobbyRow.id) {
			setHobbyRow({ ...hobbyRow, id: hobbyCount });
		}
		console.log(hobbyRow);
	};

	const renderHobbies = () => {
		const hobbyEntries = [];
		for (let i = 0; i < hobbyCount; i++) {
			hobbyEntries.push(
				<>
					<TextField
						required
						id='title'
						label='Hobby Name'
						defaultValue=''
						onChange={handleHobbyRowUpdate}
					/>
					<FormControl>
						<InputLabel id='hobby-icon-select-label'>Hobby Icon</InputLabel>
						<Select
							labelId='hobby-icon-select-label'
							id='icon'
							value='other'
							label='Icon'
							onChange={handleHobbyRowUpdate}
						>
							{hobbyIcons.map((hobbyIcon, index) => (
								<MenuItem key={index} value={hobbyIcon}>
									{hobbyIcon}
								</MenuItem>
							))}
						</Select>
					</FormControl>
				</>
			);
		}
		return hobbyEntries;
	};

	const handleSubmit = () => {
		console.log({ resumeData });
	};

	return (
		<main>
			<Paper sx={{ width: '100%', textAlign: 'left' }}>
				<Typography variant='h1' sx={{ textAlign: 'center' }}>
					Resume Data Builder
				</Typography>
				<Grid container>
					<Grid container item xs={6} spacing={1}>
						<Grid item>
							<Typography variant='h3' ml={5} mb={1} mt={1}>
								Basic Info
							</Typography>
							<StyledBox>
								{contactItems.map((contactItem, index) => (
									<div key={index}>
										<TextField
											key={index}
											required={contactItem == 'name'}
											id={contactItem}
											label={contactItem}
											defaultValue={resumeData.contact[contactItem]}
											onChange={handleContactUpdate}
										/>
									</div>
								))}
							</StyledBox>
						</Grid>
						<Grid item>
							<Typography variant='h3' ml={5} mb={1} mt={1}>
								Education
								<AddIcon
									color='action'
									onClick={() => handleEducationUpdate(1)}
								/>
								{educationCount > 1 && (
									<RemoveIcon
										color='action'
										onClick={() => handleEducationUpdate(-1)}
									/>
								)}
							</Typography>

							<StyledBox>{renderEducation()}</StyledBox>
							<FormGroup>
								<FormControlLabel
									control={<Switch defaultChecked={false} color='secondary' />}
									label='Add Certifications'
								/>
								<Typography variant='h3' ml={5} mb={1} mt={1}>
									Certifications
								</Typography>
								<StyledBox>
									{certificationItems.map((certificationItem, index) => (
										<div key={index}>
											<TextField
												key={index}
												required={true}
												id={certificationItem}
												label={certificationItem}
												defaultValue=''
											/>
										</div>
									))}
								</StyledBox>
							</FormGroup>
						</Grid>
						<Grid item></Grid>
						<Grid item>
							<Typography variant='h3' ml={5} mb={1} mt={1}>
								Hobbies
								<AddIcon color='action' onClick={() => handleHobbyUpdate(1)} />
								{educationCount > 1 && (
									<RemoveIcon
										color='action'
										onClick={() => handleHobbyUpdate(-1)}
									/>
								)}
							</Typography>
							<StyledBox>{renderHobbies()}</StyledBox>
						</Grid>
					</Grid>
					<Grid container item xs={6}>
						<Grid item>
							<Typography variant='h3' ml={5} mb={1} mt={1}>
								Work History
							</Typography>
						</Grid>
						<Grid item>
							<Button mb={1} mt={1} onClick={handleSubmit}>
								Generate Resume Data
							</Button>
						</Grid>
					</Grid>
				</Grid>
			</Paper>
		</main>
	);
};

export default Build;
