import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const SharedTableHeader = (props) => {

    return (
        <TableHead>
        <TableRow>
        {props.tableHeaders.map((header, index) => {
                return (
                <TableCell key={index} align='left'>
                    {header}
                </TableCell>);
            })}
        </TableRow>
    </TableHead>
    )
}

export default SharedTableHeader