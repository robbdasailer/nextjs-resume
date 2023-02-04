import { createTheme } from '@mui/material/styles';
import { grey, blue } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
	palette: {
		primary: {
			main: blue[700],
		},
		secondary: {
			main: grey[500],
		},
		action: {
			main: grey[900],
		},
	},
	typography: {
		fontFamily: ['Oswald', 'Serif'].join(','),
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
					background:
					`linear-gradient(to bottom, transparent, ${grey[50]}) ${grey[500]}`,
				},
				main: {
					padding: '1.5rem',
					minHeight: '100vh',
					a: {
						color: grey[900],
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
					backgroundColor: grey[500],
				},
			},
		},
		MuiButton: {
			defaultProps: {
				variant: 'contained'
			}
		},
		MuiList: {
			defaultProps: {
				dense: true,
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
	},
	spacing: 6,
});
export default theme;
