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
	black,
} from '@mui/material/colors';

const white = '#FFFFFF';

//Update this with the typography you would like to use
const fontFamily = 'Raleway';

//Update colors for light theme
const [
	primaryColor,
	paperColor,
	secondaryColor,
	actionColor,
	contrastColor,
	subHeaderTextColor,
] = [white, '#f6f6f6', orange[700], blueGrey[500], yellow[50], blueGrey[500]];

//Update colors for dark theme
const [
	darkPrimaryColor,
	darkPaperColor,
	darkSecondaryColor,
	darkActionColor,
	darkContrastColor,
	darkSubHeaderTextColor,
] = [grey[900], grey[800], grey[700], grey[300], grey[200], white];

//Typography theme shared for both light and dark themes
const typographyTheme = {
	fontFamily: [`${fontFamily}`, 'Serif'].join(','),
	h1: {
		fontSize: '3rem',
		fontWeight: 500,
	},
	h2: {
		fontSize: '1.72rem',
		fontWeight: 500,
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
		fontSize: '1rem',
		fontWeight: 400,
	},
};

//Overrides shared between both dark and light themes
const sharedOverrides = {
	MuiButton: {
		defaultProps: {
			variant: 'outlined',
			color: 'action',

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
};

//Values for light theme
const lightTheme = createTheme({
	palette: {
		mode: 'light',
		primary: {
			main: `${primaryColor}`,
			contrastText: `${contrastColor}`,
		},
		secondary: {
			main: `${secondaryColor}`,
			contrastText: `${contrastColor}`,
		},
		action: {
			main: `${actionColor}`,
		},
	},
	typography: typographyTheme,
	components: {
		MuiCssBaseline: {
			styleOverrides: {
				body: {
					background: `${primaryColor}`,
				},
				main: {
					margin: '0px 5% 0px 5%',
					padding: '1rem',
					minHeight: '100vh',
					display: 'flex',
					a: {
						color: `${actionColor}`,
						textDecoration: 'none'
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
		...sharedOverrides,
		MuiListSubheader: {
			styleOverrides: {
				root: {
					color: `${subHeaderTextColor}`,
				},
			},
			defaultProps: {
				disableSticky: true,
			},
		},
		MuiPaper: {
			styleOverrides: {
				root: {
					margin: '0.5rem',
					padding: '1rem',
					minHeight: 150,
					background: `${paperColor}`,
					borderRadius: '20px',
				},
			},
		},
	},
	spacing: 6,
});

//Values for dark theme
const darkTheme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: `${darkPrimaryColor}`,
			contrastText: `${darkContrastColor}`,
		},
		secondary: {
			main: `${darkSecondaryColor}`,
			contrastText: `${darkContrastColor}`,
		},
		action: {
			main: `${darkActionColor}`,
		},
	},
	typography: typographyTheme,
	components: {
		MuiCssBaseline: {
			styleOverrides: {
				body: {
					background: `${darkPrimaryColor}`,
				},
				main: {
					padding: '1rem',
					minHeight: '100vh',
					display: 'flex',
					a: {
						color: `${darkActionColor}`,
					},
					img: {
						borderRadius: '50%',
					},
				},
			},
		},
		...sharedOverrides,
		MuiAvatar: {
			styleOverrides: {
				root: {
					backgroundColor: `${darkPrimaryColor}`,
				},
			},
		},
		sharedOverrides,
		MuiListSubheader: {
			styleOverrides: {
				root: {
					background: `${darkPaperColor}`,
					color: `${darkSubHeaderTextColor}`,
				},
			},
			defaultProps: {
				disableSticky: true,
			},
		},
		MuiPaper: {
			styleOverrides: {
				root: {
					padding: '.375rem',
					minHeight: 150,
					background: `${darkPaperColor}`,
				},
			},
		},
	},
	spacing: 6,
});

export { lightTheme, darkTheme };
