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
	Popover,
	Step,
	StepButton,
	StepContent,
	StepLabel,
	Stepper,
	Tooltip,
	Typography,
	useScrollTrigger,
	useTheme
} from '@mui/material';
import { useEffect, useRef, useState, MouseEvent } from 'react';
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
import './ProfileMobile.css';
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
import bluePurpleBg from '../../common/images/bluePurpleBg.png';
import { skills } from '../../common/content';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Link } from 'react-router-dom';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

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

const ProfileMobile = () => {
	const theme = useTheme();
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
		<Box>
			<Card
				sx={{
					padding: {
						md: 5,
						lg: 7,
						xl: 7
					},
					marginLeft: {
						xs: 1,
						sm: 1
					},
					marginRight: {
						xs: 1,
						sm: 1
					},
					width: {
						xs: '100%',
						sm: '100%',
						md: '80%',
						lg: 900,
						xl: 900
					},
					background: `url(${bluePurpleBg})`
				}}>
				<CardHeader
					title="Experience"
					titleTypographyProps={{
						color: 'white',
						fontWeight: {
							xs: 500,
							sm: 500,
							md: 700,
							lg: 900,
							xl: 900
						},
						fontSize: {
							xs: 20,
							sm: 20,
							md: 22,
							lg: 24,
							xl: 24
						}
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
							<Step key={index} completed={completed[index]}>
								<StepButton onClick={() => handleStep(index)}>
									<StepLabel
										StepIconComponent={() =>
											EmployerLogo(employer.name.value)
										}>
										<Typography
											sx={{
												color: 'white',
												fontWeight: {
													xs: 500,
													sm: 500,
													md: 700,
													lg: 900,
													xl: 900
												},
												fontSize: {
													xs: 16,
													sm: 16,
													md: 20,
													lg: 24,
													xl: 24
												}
											}}>
											{employer.name.label}
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
															fontSize: {
																xs: 12,
																sm: 12,
																md: 16,
																lg: 20,
																xl: 20
															}
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

			<Card
				sx={{
					padding: {
						md: 5,
						lg: 7,
						xl: 7
					},
					marginLeft: {
						xs: 1,
						sm: 1
					},
					marginRight: {
						xs: 1,
						sm: 1
					},
					width: {
						xs: '100%',
						sm: '100%',
						md: '80%',
						lg: 900,
						xl: 900
					},
					background: `url(${bluePurpleBg})`
				}}>
				<CardHeader
					title="Education"
					titleTypographyProps={{
						color: 'white',
						fontWeight: {
							xs: 500,
							sm: 500,
							md: 700,
							lg: 900,
							xl: 900
						},
						fontSize: {
							xs: 20,
							sm: 20,
							md: 22,
							lg: 24,
							xl: 24
						}
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
											<Grid item>{college.name}</Grid>
											<Grid
												item
												sx={{
													lg: {
														marginTop: 1
													},
													xl: { marginTop: 1 }
												}}>
												<Typography>
													{college.location}
												</Typography>
											</Grid>
										</Grid>
									}
									secondary={college.program}
									primaryTypographyProps={{
										color: 'white',
										fontWeight: {
											xs: 500,
											sm: 500,
											md: 700,
											lg: 900,
											xl: 900
										},
										fontSize: {
											xs: 16,
											sm: 16,
											md: 20,
											lg: 24,
											xl: 24
										}
									}}
									secondaryTypographyProps={{
										color: 'white',
										fontSize: 18
									}}
								/>
							</ListItem>
						))}
					</List>
				</CardContent>
			</Card>

			<Card
				sx={{
					padding: {
						md: 5,
						lg: 7,
						xl: 7
					},
					marginLeft: {
						xs: 1,
						sm: 1
					},
					marginRight: {
						xs: 1,
						sm: 1
					},
					width: {
						xs: '100%',
						sm: '100%',
						md: '80%',
						lg: 900,
						xl: 900
					},
					background: `url(${bluePurpleBg})`
				}}>
				<CardHeader
					title="Skills and Achievements"
					titleTypographyProps={{
						color: 'white',
						fontWeight: {
							xs: 500,
							sm: 500,
							md: 700,
							lg: 900,
							xl: 900
						},
						fontSize: {
							xs: 16,
							sm: 16,
							md: 20,
							lg: 24,
							xl: 24
						}
					}}></CardHeader>
				<CardContent>
					{skills.map((skill) => (
						<Chip
							label={skill}
							variant="outlined"
							sx={{
								color: 'white',
								fontSize: 22,
								margin: 2
							}}
						/>
					))}
				</CardContent>
				<CardContent
					sx={{
						position: 'relative',
						display: 'flex',
						justifyContent: 'center'
					}}>
					<Box sx={{ maxWidth: 600, flexGrow: 1 }}>
						<AutoPlaySwipeableViews
							axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
							index={activeImageStep}
							onChangeIndex={handleStepChange}
							enableMouseEvents>
							{certificates.map((certificate, index) => (
								<div
									key={index}
									style={{
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center'
									}}>
									{Math.abs(activeImageStep - index) <= 2 ? (
										<Box
											component="img"
											sx={{
												display: 'block',
												maxWidth: 600,
												overflow: 'hidden'
											}}
											src={certificate}
											alt={'certificate'}
										/>
									) : null}
								</div>
							))}
						</AutoPlaySwipeableViews>
						<MobileStepper
							sx={{ background: 'none' }}
							steps={maxSteps}
							position="static"
							activeStep={activeImageStep}
							nextButton={
								<Button
									size="small"
									onClick={handleNext}
									disabled={activeImageStep === maxSteps - 1}>
									Next
									{theme.direction === 'rtl' ? (
										<KeyboardArrowLeft />
									) : (
										<KeyboardArrowRight />
									)}
								</Button>
							}
							backButton={
								<Button
									size="small"
									onClick={handleBack}
									disabled={activeImageStep === 0}>
									{theme.direction === 'rtl' ? (
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

			<Card
				sx={{
					padding: {
						md: 5,
						lg: 7,
						xl: 7
					},
					marginLeft: {
						xs: 1,
						sm: 1
					},
					marginRight: {
						xs: 1,
						sm: 1
					},
					width: {
						xs: '100%',
						sm: '100%',
						md: '80%',
						lg: 900,
						xl: 900
					},
					background: `url(${bluePurpleBg})`
				}}>
				<CardContent>
					<Typography
						sx={{
							fontSize: {
								xs: 20,
								sm: 20,
								md: 22,
								lg: 24,
								xl: 24
							},
							color: 'white'
						}}
						gutterBottom>
						{summary}
					</Typography>
				</CardContent>
			</Card>
			<ContactLinks />
		</Box>
	);
};

export default ProfileMobile;