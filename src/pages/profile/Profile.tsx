import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax';
import {
	Avatar,
	Box,
	Button,
	Card,
	CardContent,
	CardHeader,
	Chip,
	Divider,
	Fab,
	Fade,
	Grid,
	IconButton,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	MobileStepper,
	Paper,
	Popover,
	Step,
	StepButton,
	StepContent,
	StepLabel,
	Stepper,
	ThemeProvider,
	Tooltip,
	Typography,
	createTheme,
	useMediaQuery,
	useScrollTrigger,
	useTheme
} from '@mui/material';
import { useEffect, useRef, useState, MouseEvent, Fragment } from 'react';
import matrixLayer1 from '../../common/images/matrix-layer-1.png';
import matrixLayer2 from '../../common/images/matrix-layer-2.png';
import matrixLayer3 from '../../common/images/matrix-layer-3.png';
import matrixLayer4 from '../../common/images/matrix-layer-4.png';
import matrixLayer5 from '../../common/images/matrix-layer-5.png';
import matrixLayer6 from '../../common/images/matrix-layer-6.png';
import matrix1 from '../../common/images/matrix1.png';
import matrix2 from '../../common/images/matrix2.png';
import usdtlTransparentWhite from '../../common/images/usdtlTransparentWhite.png';
import chaseTransparentWhite from '../../common/images/chaseTransparentWhite.png';
import infiniteSolutionsTransparentWhite from '../../common/images/infiniteSolutionsTransparentWhite.png';
import { employers, colleges, summary } from '../../common/content';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PhoneIcon from '@mui/icons-material/Phone';
import HomeIcon from '@mui/icons-material/Home';
import { motion } from 'framer-motion';
import './Profile.css';
import awsBadge from '../../common/images/certificates/awsBadge.png';
import beginningSqlServer from '../../common/images/certificates/beginningSqlServer.png';
import databaseDesign from '../../common/images/certificates/databaseDesign.png';
import splitLevel1 from '../../common/images/certificates/splitLevel1.png';
import splitLevel2 from '../../common/images/certificates/splitLevel2.png';
import sqlLevel1 from '../../common/images/certificates/sqlLevel1.png';
import sqlLevel2 from '../../common/images/certificates/sqlLevel2.png';
import sqlProgramming from '../../common/images/certificates/sqlProgramming.png';
import sqlServerAnalysis from '../../common/images/certificates/sqlServerAnalysis.png';
import sqlServerIntegration from '../../common/images/certificates/sqlServerIntegration.png';
import sqlServerReporting from '../../common/images/certificates/sqlServerReporting.png';
import purpleBg from '../../common/images/purpleBg.png';
import { skills } from '../../common/content';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Link } from 'react-router-dom';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import ProfileMobile from '../../mobile/profile/ProfileMobile';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const certificates = [
	awsBadge,
	beginningSqlServer,
	databaseDesign,
	splitLevel1,
	splitLevel2,
	sqlLevel1,
	sqlLevel2,
	sqlProgramming,
	sqlServerAnalysis,
	sqlServerIntegration,
	sqlServerReporting
];

const themeCreate = createTheme({
	typography: {
		fontFamily: ['Work Sans', 'sans-serif'].join(',')
	}
});

const ContactLinks = (): JSX.Element => {
	const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

	const open = Boolean(anchorEl);
	const handleIconClick = (
		event: MouseEvent<HTMLButtonElement>,
		iconType: 'phone' | 'email'
	) => {
		if (iconType === 'phone') {
			navigator.clipboard.writeText('2063721407');
		}
		if (iconType === 'email') {
			navigator.clipboard.writeText('u.batsaikhan@gmail.com');
		}
		setAnchorEl(event?.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const id = open ? 'popover' : undefined;

	return (
		<Box
			sx={{
				width: { xs: '100%', sm: '100%' },
				display: 'flex',
				gap: {
					sx: 1,
					sm: 1,
					md: 1,
					lg: 2,
					xl: 2
				},
				flexDirection: {
					xs: 'row',
					sm: 'row',
					md: 'column',
					lg: 'column',
					xl: 'column'
				}
			}}>
			<motion.div whileHover={{ scale: 1.3 }}>
				<IconButton
					aria-describedby={id}
					onClick={(event: MouseEvent<HTMLButtonElement>) =>
						handleIconClick(event, 'phone')
					}>
					<PhoneIcon sx={{ fontSize: 40 }} color="info" />
				</IconButton>
				<Popover
					open={open}
					id={id}
					anchorEl={anchorEl}
					onClose={handleClose}
					anchorOrigin={{
						vertical: 'center',
						horizontal: 'right'
					}}>
					<Typography sx={{ p: 1 }}>Copied!</Typography>
				</Popover>
			</motion.div>
			<motion.div whileHover={{ scale: 1.3 }}>
				<IconButton
					aria-describedby={id}
					onClick={(event: MouseEvent<HTMLButtonElement>) =>
						handleIconClick(event, 'email')
					}>
					<EmailIcon sx={{ fontSize: 30 }} color="info" />
				</IconButton>
			</motion.div>
			<motion.div whileHover={{ scale: 1.3 }}>
				<IconButton
					LinkComponent="a"
					target="blank"
					href="https://www.linkedin.com/in/khan-io/">
					<LinkedInIcon sx={{ fontSize: 40 }} color="info" />
				</IconButton>
			</motion.div>
			<motion.div whileHover={{ scale: 1.3 }}>
				<IconButton
					LinkComponent="a"
					target="blank"
					href="https://github.com/khan-develops">
					<GitHubIcon sx={{ fontSize: 40 }} color="info" />
				</IconButton>
			</motion.div>

			<motion.div whileHover={{ scale: 1 }}>
				<Tooltip title="This link is under construction!">
					<IconButton>
						<TwitterIcon sx={{ fontSize: 40 }} color="info" />
					</IconButton>
				</Tooltip>
			</motion.div>
			<motion.div whileHover={{ scale: 1 }}>
				<Tooltip title="This link is under construction!">
					<IconButton>
						<InstagramIcon sx={{ fontSize: 40 }} color="info" />
					</IconButton>
				</Tooltip>
			</motion.div>
			<motion.div
				key="social-media-link-home"
				className="social-media-link-home"
				whileHover={{ scale: 1.5 }}
				initial={{ scale: 0 }}
				animate={{ scale: 1 }}
				exit={{
					scale: 0,
					transition: { duration: 0.5 }
				}}
				transition={{ duration: 0.5 }}>
				<IconButton component={Link} to="/">
					<HomeIcon color="info" sx={{ fontSize: 50 }} />
				</IconButton>
			</motion.div>
		</Box>
	);
};

const Profile = () => {
	const theme = useTheme();
	const matches: boolean = useMediaQuery(theme.breakpoints.down('md'));
	const [activeStep, setActiveStep] = useState<number>(0);
	const [container, setContainer] = useState<HTMLDivElement>();
	const [completed, setCompleted] = useState<{
		[k: number]: boolean;
	}>({ 0: true });

	const [activeImageStep, setActiveImageStep] = useState(0);
	const maxSteps = certificates.length;

	const handleNext = () => {
		setActiveImageStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveImageStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleStepChange = (step: number) => {
		setActiveImageStep(step);
	};

	const ref = useRef<IParallax>(null);

	useEffect(() => {
		setContainer(ref.current?.container.current);
	}, [container]);

	const handleStep = (step: number) => {
		setCompleted({ [step]: true });
		setActiveStep(step);
	};

	const EmployerLogo = (employerName: string): JSX.Element => {
		if (employerName === 'infiniteSolutions') {
			return (
				<Avatar
					src={infiniteSolutionsTransparentWhite}
					alt={employerName}
				/>
			);
		} else if (employerName === 'usdtl') {
			return <Avatar src={usdtlTransparentWhite} alt={employerName} />;
		} else {
			return <Avatar src={chaseTransparentWhite} alt={employerName} />;
		}
	};

	const trigger = useScrollTrigger({
		target: container
	});

	return (
		<ThemeProvider theme={themeCreate}>
			{matches ? (
				<ProfileMobile />
			) : (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1 }}
					exit={{ opacity: '0', transition: { duration: 0.5 } }}>
					<Parallax
						ref={ref}
						pages={4}
						style={{
							width: '100%',
							position: 'absolute'
						}}>
						<motion.div
							initial={{ scaleY: 0 }}
							animate={{ scaleY: 1 }}
							exit={{
								scaleY: 0,
								transition: { duration: 0.5 }
							}}
							transition={{ duration: 1 }}>
							<ParallaxLayer
								offset={0}
								speed={0.5}
								factor={3}
								style={{
									backgroundImage: `url(${matrixLayer1})`,
									backgroundSize: 'cover'
								}}
							/>
						</motion.div>
						<motion.div
							initial={{ scaleY: 0 }}
							animate={{ scaleY: 1 }}
							exit={{
								scaleY: 0,
								transition: { duration: 0.5 }
							}}
							transition={{ duration: 1.1 }}>
							<ParallaxLayer
								offset={0}
								speed={1}
								factor={1}
								style={{
									backgroundImage: `url(${matrixLayer2})`,
									backgroundSize: 'cover'
								}}
							/>
						</motion.div>
						<motion.div
							initial={{ scaleY: 0 }}
							animate={{ scaleY: 1 }}
							exit={{
								scaleY: 0,
								transition: { duration: 0.5 }
							}}
							transition={{ duration: 1.2 }}>
							<ParallaxLayer
								offset={0.7}
								speed={1.5}
								factor={2}
								style={{
									backgroundImage: `url(${matrixLayer3})`,
									backgroundSize: 'cover'
								}}
							/>
						</motion.div>
						<motion.div
							initial={{ scaleY: 0 }}
							animate={{ scaleY: 1 }}
							exit={{
								scaleY: 0,
								transition: { duration: 0.5 }
							}}
							transition={{ duration: 1.3 }}>
							<ParallaxLayer
								offset={0.9}
								speed={2}
								factor={0.5}
								style={{
									backgroundImage: `url(${matrixLayer4})`,
									backgroundSize: 'cover'
								}}
							/>
						</motion.div>
						<motion.div
							initial={{ scaleY: 0 }}
							animate={{ scaleY: 1 }}
							exit={{
								scaleY: 0,
								transition: { duration: 0.5 }
							}}
							transition={{ duration: 1.1 }}>
							<ParallaxLayer
								offset={0.1}
								speed={2.5}
								factor={2}
								style={{
									backgroundImage: `url(${matrixLayer5})`,
									backgroundSize: 'contain'
								}}
							/>
						</motion.div>
						<motion.div
							initial={{ scaleY: 0 }}
							animate={{ scaleY: 1 }}
							exit={{
								scaleY: 0,
								transition: { duration: 0.5 }
							}}
							transition={{ duration: 0.9 }}>
							<ParallaxLayer
								offset={1.2}
								speed={3}
								factor={2}
								style={{
									backgroundImage: `url(${matrixLayer6})`,
									backgroundSize: 'cover'
								}}
							/>
						</motion.div>
						<motion.div
							initial={{ scaleY: 0 }}
							animate={{ scaleY: 1 }}
							exit={{
								scaleY: 0,
								transition: { duration: 0.5 }
							}}
							transition={{ duration: 0.8 }}>
							<ParallaxLayer
								offset={0.5}
								speed={0.5}
								factor={-4}
								style={{
									backgroundImage: `url(${matrixLayer1})`,
									backgroundSize: 'cover'
								}}
							/>
						</motion.div>
						<motion.div
							initial={{ scaleY: 0 }}
							animate={{ scaleY: 1 }}
							exit={{
								scaleY: 0,
								transition: { duration: 0.5 }
							}}
							transition={{ duration: 0.7 }}>
							<ParallaxLayer
								offset={0.7}
								speed={1}
								factor={-1.5}
								style={{
									backgroundImage: `url(${matrixLayer2})`,
									backgroundSize: 'cover'
								}}
							/>
						</motion.div>
						<motion.div
							initial={{ scaleY: 0 }}
							animate={{ scaleY: 1 }}
							exit={{
								scaleY: 0,
								transition: { duration: 0.5 }
							}}
							transition={{ duration: 0.1 }}>
							<ParallaxLayer
								offset={0.9}
								speed={1.5}
								factor={-2}
								style={{
									backgroundImage: `url(${matrixLayer3})`,
									backgroundSize: 'cover'
								}}
							/>
						</motion.div>
						<motion.div
							initial={{ scaleY: 0 }}
							animate={{ scaleY: 1 }}
							exit={{
								scaleY: 0,
								transition: { duration: 0.1 }
							}}
							transition={{ duration: 0.1 }}>
							<ParallaxLayer
								offset={2.5}
								speed={2}
								factor={-1.5}
								style={{
									backgroundImage: `url(${matrixLayer4})`,
									backgroundSize: 'cover'
								}}
							/>
						</motion.div>
						<motion.div
							initial={{ scaleY: 0 }}
							animate={{ scaleY: 1 }}
							exit={{
								scaleY: 0,
								transition: { duration: 0.1 }
							}}
							transition={{ duration: 0.1 }}>
							<ParallaxLayer
								offset={0.4}
								speed={1.5}
								factor={-0.6}
								style={{
									backgroundImage: `url(${matrixLayer5})`,
									backgroundSize: 'cover'
								}}
							/>
						</motion.div>
						<motion.div
							initial={{ scaleY: 0 }}
							animate={{ scaleY: 1 }}
							exit={{
								scaleY: 0,
								transition: { duration: 0.1 }
							}}
							transition={{ duration: 0.1 }}>
							<ParallaxLayer
								offset={1}
								speed={3}
								factor={-2.5}
								style={{
									backgroundImage: `url(${matrixLayer6})`,
									backgroundSize: 'cover'
								}}
							/>
						</motion.div>
						<motion.div
							initial={{ scaleY: 0 }}
							animate={{ scaleY: 1 }}
							exit={{
								scaleY: 0,
								transition: { duration: 0.5 }
							}}
							transition={{ duration: 0.9 }}>
							<ParallaxLayer
								offset={0.4}
								speed={4}
								factor={-0.6}
								style={{
									backgroundImage: `url(${matrix1})`,
									backgroundSize: 'cover'
								}}
							/>
						</motion.div>
						<motion.div
							initial={{ scaleY: 0 }}
							animate={{ scaleY: 1 }}
							exit={{
								scaleY: 0,
								transition: { duration: 0.5 }
							}}
							transition={{ duration: 1 }}>
							<ParallaxLayer
								offset={1.9}
								speed={1}
								factor={2}
								style={{
									backgroundImage: `url(${matrix2})`,
									backgroundSize: 'cover'
								}}
							/>
						</motion.div>
						<ParallaxLayer
							offset={0}
							style={{
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center'
							}}>
							<Card
								sx={{
									padding: 5,
									width: '70%',
									background: `url(${purpleBg})`
								}}>
								<CardHeader
									title="Experience"
									titleTypographyProps={{
										color: 'white',
										fontWeight: 900,
										fontSize: 24
									}}
								/>
								<CardContent
									sx={{
										overflowY: 'auto',
										height: 'auto',
										marginBottom: 2
									}}>
									<Stepper
										activeStep={activeStep}
										nonLinear
										orientation="vertical"
										sx={{ color: 'white' }}>
										{employers.map((employer, index) => (
											<Step
												key={index}
												completed={completed[index]}>
												<StepButton
													onClick={() =>
														handleStep(index)
													}>
													<StepLabel
														StepIconComponent={() =>
															EmployerLogo(
																employer.name
																	.value
															)
														}>
														<Typography
															sx={{
																color: 'white',
																fontWeight: 900,
																fontSize: 24
															}}>
															{
																employer.name
																	.label
															}
														</Typography>
													</StepLabel>
												</StepButton>
												<StepContent>
													<List>
														{employer.experiences?.map(
															(experience) => (
																<ListItem>
																	<ListItemIcon>
																		<KeyboardArrowRightIcon
																			sx={{
																				color: 'white'
																			}}
																		/>
																	</ListItemIcon>
																	<ListItemText
																		primary={
																			experience.value
																		}
																		primaryTypographyProps={{
																			fontSize: 20,
																			fontWeight: 900
																		}}></ListItemText>
																</ListItem>
															)
														)}
													</List>
												</StepContent>
											</Step>
										))}
									</Stepper>
								</CardContent>
							</Card>
						</ParallaxLayer>
						<ParallaxLayer
							offset={1}
							style={{
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center'
							}}>
							<Card
								sx={{
									padding: 5,
									width: '70%',
									background: `url(${purpleBg})`
								}}>
								<CardHeader
									title="Education"
									titleTypographyProps={{
										color: 'white',
										fontWeight: 900,
										fontSize: 24
									}}></CardHeader>
								<CardContent sx={{ paddingTop: 2 }}>
									<List>
										{colleges.map((college) => (
											<ListItem>
												<ListItemText
													primary={
														<Grid
															container
															justifyContent="space-between">
															<Grid item>
																{college.name}
															</Grid>
															<Grid
																item
																marginTop={2}>
																<Typography
																	fontWeight={
																		900
																	}>
																	{
																		college.location
																	}
																</Typography>
															</Grid>
														</Grid>
													}
													secondary={college.program}
													primaryTypographyProps={{
														color: 'white',
														fontWeight: 900,
														fontSize: 24
													}}
													secondaryTypographyProps={{
														color: 'white',
														fontWeight: 900,
														fontSize: 18
													}}
												/>
											</ListItem>
										))}
									</List>
								</CardContent>
							</Card>
						</ParallaxLayer>
						<ParallaxLayer
							offset={2}
							style={{
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'center',
								alignItems: 'center'
							}}>
							<Card
								sx={{
									padding: 5,
									width: '70%',
									background: `url(${purpleBg})`
								}}>
								<CardHeader
									title="Skills and Achievements"
									titleTypographyProps={{
										color: 'white',
										fontWeight: 900,
										fontSize: 24
									}}></CardHeader>
								<CardContent sx={{ width: '100%' }}>
									<Grid
										container
										width="100%"
										justifyContent="center"
										gap={4}
										marginBottom={4}>
										{skills.map((skill) => (
											<Grid item>
												<motion.div
													className="box"
													whileHover={{
														scale: 1.1
													}}
													transition={{
														type: 'spring',
														stiffness: 400,
														damping: 10
													}}>
													<Typography
														sx={{
															color: 'gray',
															fontSize: 24,
															fontWeight: 900
														}}>
														{skill}
													</Typography>
												</motion.div>
											</Grid>
										))}
									</Grid>
								</CardContent>

								<CardContent
									sx={{
										position: 'relative',
										display: 'flex',
										justifyContent: 'center'
									}}>
									<Box sx={{ maxWidth: 600, flexGrow: 1 }}>
										<AutoPlaySwipeableViews
											axis={
												theme.direction === 'rtl'
													? 'x-reverse'
													: 'x'
											}
											index={activeImageStep}
											onChangeIndex={handleStepChange}
											enableMouseEvents>
											{certificates.map(
												(certificate, index) => (
													<div
														key={index}
														style={{
															display: 'flex',
															justifyContent:
																'center',
															alignItems: 'center'
														}}>
														{Math.abs(
															activeImageStep -
																index
														) <= 2 ? (
															<Box
																component="img"
																sx={{
																	display:
																		'block',
																	maxWidth: 600,
																	overflow:
																		'hidden'
																}}
																src={
																	certificate
																}
																alt={
																	'certificate'
																}
															/>
														) : null}
													</div>
												)
											)}
										</AutoPlaySwipeableViews>
										<MobileStepper
											sx={{ background: 'none' }}
											steps={maxSteps}
											position="static"
											activeStep={activeImageStep}
											nextButton={
												<Button
													sx={{
														color: 'white',
														fontWeight: 900
													}}
													size="small"
													onClick={handleNext}
													disabled={
														activeImageStep ===
														maxSteps - 1
													}>
													Next
													{theme.direction ===
													'rtl' ? (
														<KeyboardArrowLeft />
													) : (
														<KeyboardArrowRight />
													)}
												</Button>
											}
											backButton={
												<Button
													sx={{
														color: 'white',
														fontWeight: 900
													}}
													size="small"
													onClick={handleBack}
													disabled={
														activeImageStep === 0
													}>
													{theme.direction ===
													'rtl' ? (
														<KeyboardArrowRight />
													) : (
														<KeyboardArrowLeft />
													)}
													Back
												</Button>
											}
										/>
									</Box>
								</CardContent>
							</Card>
						</ParallaxLayer>
						<ParallaxLayer
							offset={3}
							style={{
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center'
							}}>
							<Card
								sx={{
									padding: 5,
									width: '70%',
									background: `url(${purpleBg})`
								}}>
								<CardContent>
									<Typography
										sx={{
											fontSize: 24,
											fontWeight: 900,
											color: 'white'
										}}
										gutterBottom>
										{summary}
									</Typography>
								</CardContent>
							</Card>
						</ParallaxLayer>
					</Parallax>
					<Box
						sx={{
							position: 'absolute',
							height: '100%',
							right: 0,
							display: 'flex',
							flexDirection: 'column'
						}}>
						<Box
							sx={{
								height: '100%',
								display: 'flex'
							}}>
							<Divider
								orientation="vertical"
								sx={{
									'&::before, &::after': {
										borderColor: '#0288d1'
									}
								}}>
								<ContactLinks />
							</Divider>
						</Box>
						<Box
							sx={{
								position: 'absolute',
								bottom: 20,
								right: 60
							}}>
							<Fade in={trigger}>
								<Fab
									onClick={() => ref.current?.scrollTo(0)}
									sx={{ marginBottom: 4 }}>
									<KeyboardArrowUpIcon fontSize="large" />
								</Fab>
							</Fade>
						</Box>
					</Box>
				</motion.div>
			)}
		</ThemeProvider>
	);
};

export default Profile;
