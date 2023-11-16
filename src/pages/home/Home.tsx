import {
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Divider,
	Typography
} from '@mui/material';
import { motion } from 'framer-motion';
import signature from '../../common/images/signature.png';
import { ThemeProvider, createTheme } from '@mui/material';

import './Home.css';
import { Link } from 'react-router-dom';

const theme = createTheme({
	typography: {
		fontFamily: [
			'Ubuntu Mono',
			'Major Mono Display',
			'monospace',
			'Quicksand',
			'sans-serif',
			'Sulphur Point',
			'sans-serif'
		].join(',')
	}
});

const Home = () => {
	return (
		<ThemeProvider theme={theme}>
			<motion.div className="container">
				<Card
					sx={{
						background: 'none',
						paddingLeft: '30%',
						paddingBottom: '10%'
					}}
					raised={false}
					elevation={0}>
					<CardMedia
						component="img"
						image={signature}
						sx={{ marginBottom: 2 }}
					/>
					<Divider variant="fullWidth" />
					<CardContent>
						<Typography variant="h4">Software Engineer</Typography>
					</CardContent>
					<CardActions
						sx={{
							width: '100%',
							display: 'flex',
							justifyContent: 'center'
						}}>
						<motion.div
							key="home-learn-more"
							className="home-lear-more"
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 1.5 }}
							animate={{ scale: 1 }}>
							<Button
								size="large"
								component={Link}
								to="/my-profile"
								color="warning">
								<Typography fontFamily="Ubuntu Mono">
									{'< Learn more about me />'}
								</Typography>
							</Button>
						</motion.div>
					</CardActions>
				</Card>
			</motion.div>
		</ThemeProvider>
	);
};

export default Home;
