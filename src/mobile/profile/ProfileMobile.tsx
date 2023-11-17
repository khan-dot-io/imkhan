import {
	AppBar,
	Avatar,
	Box,
	Button,
	Card,
	CardContent,
	CardHeader,
	Chip,
	Divider,
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
	Toolbar,
	Tooltip,
	Typography,
	useTheme
} from '@mui/material';
import { useState, MouseEvent, Fragment } from 'react';
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
import purpleBg from '../../common/images/purpleBg.png';
import { skills } from '../../common/content';
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
		<AppBar position="sticky" color="default">
			<Toolbar
				sx={{
					display: 'flex',
					justifyContent: 'center'
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
							vertical: 'bottom',
							horizontal: 'left'
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
			</Toolbar>
		</AppBar>
	);
};

const ProfileMobile = () => {
	const theme = useTheme();
	const [activeStep, setActiveStep] = useState<number>(0);
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

	return (
		<Fragment>
			<ContactLinks />
			<Card
				square
				sx={{
					display: 'flex',
					flexDirection: 'column',
					gap: 4,
					padding: 2,
					background: `url(${purpleBg})`
				}}>
				<Paper sx={{ background: 'none' }} elevation={24}>
					<CardHeader
						title="Experience"
						titleTypographyProps={{
							color: 'white',
							fontWeight: 900,
							fontSize: 22
						}}
					/>
					<Divider
						variant="middle"
						sx={{
							'&::before, &::after': {
								borderColor: 'white'
							}
						}}
					/>
					<CardContent
						sx={{
							overflowY: 'auto',
							height: 'auto'
						}}>
						<Stepper
							activeStep={activeStep}
							nonLinear
							orientation="vertical"
							sx={{ color: 'white' }}>
							{employers.map((employer, index) => (
								<Step key={index} completed={completed[index]}>
									<StepButton
										onClick={() => handleStep(index)}>
										<StepLabel
											StepIconComponent={() =>
												EmployerLogo(
													employer.name.value
												)
											}>
											<Typography
												sx={{
													color: 'white',
													fontWeight: 900,
													fontSize: 16
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
																fontSize: 12,
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
				</Paper>

				<Paper sx={{ background: 'none' }} elevation={24}>
					<CardHeader
						title="Education"
						titleTypographyProps={{
							color: 'white',
							fontWeight: 900,
							fontSize: 20
						}}></CardHeader>
					<CardContent>
						<List>
							{colleges.map((college) => (
								<ListItem>
									<ListItemText
										primary={
											<Grid
												container
												justifyContent="space-between">
												<Grid item>{college.name}</Grid>
												<Grid item>
													<Typography
														fontWeight={900}>
														{college.location}
													</Typography>
												</Grid>
											</Grid>
										}
										secondary={college.program}
										primaryTypographyProps={{
											color: 'white',
											fontWeight: 900,
											fontSize: 16
										}}
										secondaryTypographyProps={{
											color: 'white',
											fontSize: 18,
											fontWeight: 900
										}}
									/>
								</ListItem>
							))}
						</List>
					</CardContent>
				</Paper>
				<Paper sx={{ background: 'none' }} elevation={24}>
					<CardHeader
						title="Skills and Achievements"
						titleTypographyProps={{
							color: 'white',
							fontWeight: 900,
							fontSize: 16
						}}></CardHeader>
					<CardContent>
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
								{certificates.map((certificate, index) => (
									<div
										key={index}
										style={{
											display: 'flex',
											justifyContent: 'center',
											alignItems: 'center'
										}}>
										{Math.abs(activeImageStep - index) <=
										2 ? (
											<Box
												component="img"
												sx={{
													display: 'block',
													maxWidth: '90%',
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
								LinearProgressProps={{}}
								steps={maxSteps}
								position="static"
								activeStep={activeImageStep}
								nextButton={
									<Button
										sx={{ color: 'white' }}
										size="small"
										onClick={handleNext}
										disabled={
											activeImageStep === maxSteps - 1
										}>
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
										sx={{ color: 'white' }}
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
				</Paper>
				<Paper sx={{ background: 'none' }} elevation={24}>
					<CardContent>
						<Typography
							sx={{
								fontSize: 20,
								fontWeight: 900,
								color: 'white'
							}}
							gutterBottom>
							{summary}
						</Typography>
					</CardContent>
				</Paper>
			</Card>
		</Fragment>
	);
};

export default ProfileMobile;
