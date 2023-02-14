import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';

import SharedFormHeader from './sharedFormHeader';
import SharedTableHeader from './sharedTableHeader';

const HobbyList = (props) => {

    const tableHeaders = ['Hobby Name', 'Hobby Icon'];

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

    return (
		<>
			<SharedFormHeader header="Hobbies" />
			<TableContainer sx={{ml: 3, width: '98%'}}>
				<Table>
					<SharedTableHeader tableHeaders={tableHeaders} />
					<TableBody>
                        {props.hobbies.map((item) => {
                            return (
                                <TableRow key={item.id}>
                                    <TableCell>{item.title}</TableCell>
                                    <TableCell>{item.icon}</TableCell>
                                </TableRow>
                            )
                        })}
					</TableBody>
				</Table>
			</TableContainer>
		</>
    )
}

export default HobbyList