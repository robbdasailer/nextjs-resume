import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';

import SharedFormHeader from './sharedFormHeader';
import SharedTableHeader from './sharedTableHeader';

const CertificationList = (props) => {

    const tableHeaders = ['Certification Name', 'Certification Url', 'Date Achieved',];

    return (
		<>
			<SharedFormHeader header="Certifications" />
			<TableContainer sx={{ml: 3, width: '98%'}}>
				<Table>
					<SharedTableHeader tableHeaders={tableHeaders} />
					<TableBody>
                        {props.certifications.map((item) => {
                            return (
                                <TableRow key={item.id}>
                                    <TableCell>{item.title}</TableCell>
                                    <TableCell>{item.link}</TableCell>
                                    <TableCell>{item.dateAchieved}</TableCell>
                                </TableRow>
                            )
                        })}
					</TableBody>
				</Table>
			</TableContainer>
		</>
    )
}

export default CertificationList