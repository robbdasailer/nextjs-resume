import { createTheme } from '@mui/material/styles';
import {
	red,
	pink,
	purple,
	deepPurple,
	indigo,
	blue,
	lightBlue,
	cyan,
	teal,
	green,
	lightGreen,
	lime,
	yellow,
	amber,
	orange,
	deepOrange,
	brown,
	grey,
	blueGrey,
} from '@mui/material/colors';

const [
	primaryColor,
	secondaryColor,
	actionColor,
	contrastColor,
	primaryTextColor,
	secondaryTextColor,
	fontFamily,
] = [
	grey[500],
	blue[700],
	grey[900],
	grey[50],
	blueGrey[900],
	blueGrey[500],
	'Raleway',
];

// Create a theme instance.
const theme = createTheme({
	palette: {
		primary: {
			main: `${primaryColor}`,
			contrastText: `${contrastColor}`
		},
		secondary: {
			main: `${secondaryColor}`,
			contrastText: `${contrastColor}`
		},
		action: {
			main: `${actionColor}`,
		},
		error: {
			main: red[500]
		}
	},
	typography: {
		fontFamily: [`${fontFamily}`, 'Serif'].join(','),
		h1: {
			fontSize: '1.5rem',
			fontWeight: 900,
		},
		h2: {
			fontSize: '1.4rem',
			fontWeight: 800,
		},
		h3: {
			fontSize: '1.3rem',
			fontWeight: 700,
		},
		h4: {
			fontSize: '1.2rem',
			fontWeight: 600,
		},
		h5: {
			fontSize: '1.1rem',
			fontWeight: 600,
		},
		h6: {
			fontSize: '1rem',
			fontWeight: 500,
		},
		body1: {
			fontSize: '1rem',
			fontWeight: 400,
		},
		body2: {
			fontSize: '.875rem',
			fontWeight: 400,
		},
	},
	components: {
		MuiCssBaseline: {
			styleOverrides: {
				body: {
					background: `linear-gradient(to bottom, transparent, ${contrastColor}) ${primaryColor}`,
				},
				main: {
					padding: '1rem',
					minHeight: '100vh',
					display: 'flex',
					a: {
						color: `${actionColor}`,
					},
					img: {
						borderRadius: '50%',
					},
				},
			},
		},
		MuiAvatar: {
			styleOverrides: {
				root: {
					backgroundColor: `${primaryColor}`,
				},
			},
		},
		MuiButton: {
			defaultProps: {
				variant: 'contained',
				color: 'secondary',
			},
			styleOverrides: {
				root: {
					marginTop: 2,
					marginRight: 1,
				},
			},
		},
		MuiList: {
			defaultProps: {
				dense: true,
			},
		},
		MuiListItemText: {
			styleOverrides: {
				root: {
					p: {
						color: `${secondaryTextColor}`,
					},
				},
			},
		},
		MuiPaper: {
			styleOverrides: {
				root: {
					padding: '.375rem',
					minHeight: 150,
				},
			},
		},
		MuiTypography: {
			styleOverrides: {
				root: {
					color: `${primaryTextColor}`,
				},
			},
		},
	},
	spacing: 6,
});
export default theme;
