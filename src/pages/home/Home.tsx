import {
	Box,
	Card,
	CardActions,
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
		fontFamily: ['Montserrat', 'sans-serif'].join(',')
	}
});

const Home = () => {
	return (
		<ThemeProvider theme={theme}>
			<Box
				sx={{
					width: '100%',
					height: '100%',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					paddingLeft: { md: 15, lg: 20, xl: 20 }
				}}>
				<motion.div
					initial={{ scale: 0 }}
					animate={{ scale: 1 }}
					exit={{
						x: window.innerWidth,
						transition: { duration: 0.7 }
					}}>
					<Card
						component={Link}
						to="/my-profile"
						color="warning"
						sx={{
							width: 350,
							padding: 10,
							background: 'none',
							textDecoration: 'none'
						}}
						raised={false}
						elevation={0}>
						<motion.div
							key="home-signature"
							className="home-signature"
							whileHover={{
								scale: 1.1,
								originY: 0,
								cursor: 'pointer'
							}}
							transition={{ type: 'spring', stiffness: 300 }}>
							<CardMedia
								component="img"
								image={signature}
								sx={{ marginBottom: 2 }}
							/>
						</motion.div>
						<Divider variant="fullWidth" />
						<CardActions
							sx={{
								width: '100%',
								display: 'flex',
								justifyContent: 'center'
							}}>
							<motion.div
								key="home-learn-more"
								style={{ width: '100%', paddingLeft: 5 }}
								whileHover={{
									scale: 1.2,
									originY: 0,
									cursor: 'pointer'
								}}
								transition={{ type: 'spring', stiffness: 300 }}>
								<Typography variant="h4">
									Software Engineer
								</Typography>
							</motion.div>
						</CardActions>
					</Card>
				</motion.div>
			</Box>
		</ThemeProvider>
	);
};

export default Home;
