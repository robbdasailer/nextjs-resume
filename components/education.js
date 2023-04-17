import { useState, useEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemAvatar from '@mui/material/ListItemAvatar';
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
import Avatar from '@mui/material/Avatar';
import Icon from '@mui/material/Icon';
import GppGoodIcon from '@mui/icons-material/GppGood';
import SchoolIcon from '@mui/icons-material/School';
import { FiberManualRecord } from '@mui/icons-material';
import { Square } from '@mui/icons-material';


const Education = (props) => {
  const degrees = props.education;
  const [degreeDescriptions, setDegreeDescriptions] = useState([]);

  useEffect(() => {
    const descriptions = {};
    degrees.forEach((degree) => {
      const degreeId = degree.id;
      const degreeDescriptions = degree.degreeDescription;
      if (!degreeDescriptions) {
        descriptions[degreeId] = [];
      } else if (typeof degreeDescriptions === 'string') {
        descriptions[degreeId] = [degreeDescriptions];
      } else {
        descriptions[degreeId] = degreeDescriptions;
      }
    });
    setDegreeDescriptions(descriptions);
  }, [degrees]);

  

  return (
    <>
      <List
        subheader={
          <ListSubheader>
            <Typography variant="h2">Education</Typography>
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
          {degrees.map((degree) => (
            <TimelineItem key={degree.id}>
              <TimelineOppositeContent
                variant="h5"
                sx={{
                  margin: '25px 0px 25px 0px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  paddingLeft: '3rem',
                }}
              >
                {degree.startDate} - {degree.endDate || 'Present'}
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                {degree.endDate ? (
                  <TimelineDot color="primary">
                    <SchoolIcon color="action" />
                  </TimelineDot>
                ) : (
                  <TimelineDot color="secondary">
                    <SchoolIcon color="action" />
                  </TimelineDot>
                )}
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent
                sx={{
                  margin: '25px 0px 25px 0px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  paddingLeft: '3rem',
                }}
              >
                <Typography variant="h5" component="span">
                  <a href={degree.schoolUrl}>{degree.school}</a>: {degree.degree}
                </Typography>
				{degreeDescriptions[degree.id] && degreeDescriptions[degree.id].map((description, index) => (
					<ListItem key={index} sx={{ marginLeft: '0px' }} disableGutters>
						<ListItemIcon sx={{ marginRight: '-30px' }}>
							<Icon sx={{ fontSize: '0.6rem' }}>
								<Square color='action' />
							</Icon>
						</ListItemIcon>
						<ListItemText primary={description} />
					</ListItem>
				))}

				</TimelineContent>
				</TimelineItem>
				))}
				</Timeline>
			</List>
		</>
	);
};

export default Education;