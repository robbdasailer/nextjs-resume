import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';

const SharedTableHeader = (props) => {
	return (
		<TableHead>
			<TableRow>
				{props.tableHeaders.map((header, index) => {
					return (
						<TableCell key={index} align='left'>
							{header}
						</TableCell>
					);
				})}
			</TableRow>
		</TableHead>
	);
};

export default SharedTableHeader;
