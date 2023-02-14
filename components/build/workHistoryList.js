import * as React from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';

import SharedFormHeader from './sharedFormHeader';
import SharedTableHeader from './sharedTableHeader';

const WorkHistoryList = (props) => {

	const {open, setOpen, transition} = props;

	const header = "Work History"

	const tableHeaders = [
		'Company',
		'Company Link',
		'Start Date',
		'End Date',
		'Job Title',
		'Job Description',
		'Additional Info'
	];

	const handleOpenEdit = (itemId) => {
		console.log(itemId)
	}

	return (
		<>
			<SharedFormHeader header={header} open={open} setOpen={setOpen} transition={transition} />
			<TableContainer sx={{ml: 3, width: '98%'}}>
				<Table>
					<SharedTableHeader tableHeaders={tableHeaders} />
					<TableBody>
						{props.workHistory.map((item) => {
							return (
							<TableRow key={item.id} onClick={() => handleOpenEdit(item.id)}>
								<TableCell>{item.company}</TableCell>
								<TableCell>{item.companyLink}</TableCell>
								<TableCell>{item.endDate}</TableCell>
								<TableCell>{item.jobTitle}</TableCell>
								<TableCell>{item.jobDescription}</TableCell>
								<TableCell>{item.startDate}</TableCell>
								<TableCell align='center'>
									<Checkbox
										checked={
											item.additionalInfo && item.additionalInfo.length > 0
										}
										disabled
									/>
								</TableCell>
							</TableRow>);
						})}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	);
};

export default WorkHistoryList;
