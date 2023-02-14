import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';

import SharedFormHeader from './sharedFormHeader';
import SharedTableHeader from './sharedTableHeader';

const SkillList = (props) => {

    const tableHeaders = ['Name', 'Rating', 'Blurb'];

    return (
		<>
			<SharedFormHeader header="Skills" />
			<TableContainer sx={{ml: 3, width: '98%'}}>
				<Table>
					<SharedTableHeader tableHeaders={tableHeaders} />
					<TableBody>
                        {props.skills.map((item) => {
                            return (
                                <TableRow key={item.id}>
                                    <TableCell>{item.skillName}</TableCell>
                                    <TableCell>{item.rating}</TableCell>
                                    <TableCell>{item.blurb}</TableCell>
                                </TableRow>
                            )
                        })}
					</TableBody>
				</Table>
			</TableContainer>
		</>
    )
}

export default SkillList