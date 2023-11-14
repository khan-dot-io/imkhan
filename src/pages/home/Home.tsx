import {
	Box,
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Divider,
	Typography
} from '@mui/material';
import { useState } from 'react';
import { motion } from 'framer-motion';
import signature from '../../common/images/signature.png';
import Typewriter from 'typewriter-effect';
import { ThemeProvider, createTheme } from '@mui/material';

import './Home.css';
import { Link } from 'react-router-dom';

const theme = createTheme({
	typography: {
		fontFamily: [
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
	const name = '> Hello, my name is Khan.';
	const [title, setTitle] = useState<string>('');
	const [achievement, setAchievement] = useState<string>('');
	const [buttonColor, setButtonColor] = useState<string>('');

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
							marginTop: 10,
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
								variant="outlined"
								size="large"
								component={Link}
								to="/my-profile"
								color="warning">
								{'< Learn more about me />'}
							</Button>
						</motion.div>
					</CardActions>
				</Card>

				{/* <Box>
				<Typography variant="h4" color="#39ff14">
					<Typewriter
						onInit={(typewriter) => {
							typewriter
								.typeString(name)
								.changeDelay(80)
								.start()
								.callFunction((instance) => {
									setTitle("> I'm a software engineer and");
									instance.elements.cursor.style.display =
										'none';
								});
						}}
						options={{
							delay: 50
						}}
					/>
				</Typography>
				{title && (
					<Typography variant="h4" color="#39ff14">
						<Typewriter
							onInit={(typewriter) => {
								typewriter
									.typeString(title)
									.start()
									.callFunction((instance) => {
										setAchievement(
											'> AWS Certified Cloud Practitioner.'
										);
										instance.elements.cursor.style.display =
											'none';
									});
							}}
							options={{
								delay: 50
							}}
						/>
					</Typography>
				)}
				{achievement && (
					<Typography variant="h4" color="#39ff14">
						<Typewriter
							onInit={(typewriter) => {
								typewriter.typeString(achievement).start();
							}}
							options={{
								delay: 50
							}}
						/>
					</Typography>
				)}
			</Box> */}
				{/* <motion.div
				initial={{ scale: 1 }}
				whileHover={{
					border: '3px solid rgba(255,255,255,.3)',
					transition: { duration: 0.3 },
					transformStyle: 'preserve-3d',
					scale: 1.01
				}}
				style={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-between',
					backgroundImage: `url(${terminalGreen})`,
					filter: 'drop-shadow(0 0 0.3rem white)',
					backgroundSize: 'cover',

					height: '900px',
					width: '900px'
				}}> */}

				{/* <motion.div
					key="home-learn-more"
					className="home-lear-more"
					whileHover={{ color: '#39ff14' }}
					onHoverStart={() => setButtonColor('#39ff14')}
					onHoverEnd={() => setButtonColor('')}
					whileTap={{ scale: 1.5 }}
					animate={{ scale: 1.1 }}>
					<Button
						size="large"
						component={Link}
						to="/my-profile"
						sx={{ color: buttonColor }}
						color="warning">
						{'< Learn more about me />'}
					</Button>
				</motion.div> */}
				{/* </motion.div> */}
				{/* <Box
				sx={{
					border: '8px solid black',
					borderRadius: 8,
					width: 1100,
					height: 800,
					borderBottom: '8px solid black'
				}}>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'flex-start',
						borderTopLeftRadius: 16,
						borderTopRightRadius: 16,
						backgroundColor: '#0e1111',
						height: 100,
						margin: 2
					}}>
					<Box>
						<CardMedia
							sx={{
								objectFit: 'contain',
								marginTop: 4,
								marginLeft: 3
							}}
							component="img"
							src={macButtons}
							height={35}
						/>
					</Box>
				</Box>
				<Box
					sx={{
						borderBottomLeftRadius: 16,
						borderBottomRightRadius: 16,
						backgroundColor: '#0e1111',
						height: 650,
						margin: 2
					}}>
					<Grid
						container
						sx={{ height: '100%' }}
						justifyContent="space-between"
						direction="column">
						<Grid item sx={{ marginLeft: 5, marginTop: 5 }}>
							<Typography variant="h4" color="#39ff14">
								<Typewriter
									onInit={(typewriter) => {
										typewriter
											.typeString(intro)
											.start()
											.callFunction((instance) => {
												setTitle(
													"> I'm a software engineer and AWS Certified Cloud Practitioner"
												);
												instance.elements.cursor.style.display =
													'none';
											});
									}}
								/>
							</Typography>
							{title && (
								<Typography variant="h4" color="#39ff14">
									<Typewriter
										onInit={(typewriter) => {
											typewriter
												.typeString(title)
												.start();
										}}
									/>
								</Typography>
							)}
						</Grid>
						<Grid item>
							<motion.div
								key="home-learn-more"
								className="home-lear-more"
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 1.5 }}
								animate={{ scale: 1 }}>
								<Button
									variant="outlined"
									size="large"
									component={Link}
									to="/my-profile"
									color="warning">
									{'< Learn more about me />'}
								</Button>
							</motion.div>
						</Grid>
					</Grid>
				</Box>
			</Box> */}
			</motion.div>
		</ThemeProvider>
	);
};

export default Home;
