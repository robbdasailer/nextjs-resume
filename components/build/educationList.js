import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';

import SharedFormHeader from './sharedFormHeader';
import SharedTableHeader from './sharedTableHeader';

const EducationList = (props) => {

    const tableHeaders = ['School', 'School URL', 'Degree', 'Graduation Year'];

    return (
		<>
			<SharedFormHeader header="Education" />
			<TableContainer sx={{ml: 3, width: '98%'}}>
				<Table>
					<SharedTableHeader tableHeaders={tableHeaders} />
					<TableBody>
                        {props.education.map((item) => {
                            return (
                                <TableRow key={item.id}>
                                    <TableCell>{item.school}</TableCell>
                                    <TableCell>{item.schoolUrl}</TableCell>
                                    <TableCell>{item.degree}</TableCell>
                                    <TableCell>{item.graduationYear}</TableCell>
                                </TableRow>
                            )
                        })}
					</TableBody>
				</Table>
			</TableContainer>
		</>
    )
}

export default EducationList