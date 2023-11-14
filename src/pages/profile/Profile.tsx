import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax';
import {
	Avatar,
	Box,
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
	Popover,
	Step,
	StepButton,
	StepContent,
	StepLabel,
	Stepper,
	Tooltip,
	Typography,
	useScrollTrigger
} from '@mui/material';
import { useEffect, useRef, useState, MouseEvent } from 'react';
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
import Skills from '../../components/skills/Skills';
import { skills } from '../../common/content';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import SocialMediaLinks from '../../components/socialMediaLinks/SocialMediaLinks';
import { Link } from 'react-router-dom';

const Profile = () => {
	const [activeStep, setActiveStep] = useState<number>(0);
	const [container, setContainer] = useState<HTMLDivElement>();
	const [completed, setCompleted] = useState<{
		[k: number]: boolean;
	}>({ 0: true });

	const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

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

	const open = Boolean(anchorEl);
	const id = open ? 'popover' : undefined;

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
		<Box>
			<Parallax
				ref={ref}
				pages={4}
				style={{
					width: 'calc(100% - 70px)',
					marginLeft: 70,
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
							padding: 4,
							width: 1000,
							background: 'linear-gradient(#e66465, #9198e5)'
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
											onClick={() => handleStep(index)}>
											<StepLabel
												StepIconComponent={() =>
													EmployerLogo(
														employer.name.value
													)
												}>
												<Typography
													sx={{
														fontSize: 24,
														color: 'white',
														fontWeight: 900
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
																	fontSize: 20
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
							padding: 4,
							width: 1000,
							background: 'linear-gradient(#e66465, #9198e5)'
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
														sx={{ marginTop: 1 }}>
														<Typography>
															{college.location}
														</Typography>
													</Grid>
												</Grid>
											}
											secondary={college.program}
											primaryTypographyProps={{
												fontWeight: 700,
												color: 'white',
												fontSize: 22
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
				</ParallaxLayer>
				<ParallaxLayer
					offset={2}
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						width: 'calc(100%-100px)'
					}}>
					<Card
						sx={{
							paddingTop: 4,
							paddingLeft: 4,
							paddingRight: 4,
							width: 1000,
							background: 'linear-gradient(#e66465, #9198e5)'
						}}>
						<CardHeader
							title="My Skills"
							titleTypographyProps={{
								color: 'white',
								fontWeight: 900,
								fontSize: 24
							}}></CardHeader>
						<CardContent>
							{skills.map((skill) => (
								<Chip
									label={skill}
									variant="outlined"
									sx={{
										color: 'white',
										fontSize: 24,
										margin: 2
									}}
								/>
							))}
						</CardContent>
						<CardContent
							sx={{ width: 'calc(100%-100px)', marginTop: 2 }}>
							<Skills />
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
							padding: 4,
							width: 1000,
							background: 'linear-gradient(#e66465, #9198e5)'
						}}>
						<CardHeader
							title="About me"
							titleTypographyProps={{
								color: 'white',
								fontWeight: 900,
								fontSize: 24
							}}></CardHeader>
						<CardContent>
							<Typography
								sx={{ fontSize: 20, color: 'white' }}
								gutterBottom>
								{summary}
							</Typography>
						</CardContent>
					</Card>
				</ParallaxLayer>
			</Parallax>
			<Box
				position="absolute"
				height="100%"
				right={0}
				display="flex"
				flexDirection="column">
				<Grid container height="100%">
					<Divider
						orientation="vertical"
						sx={{
							'&::before, &::after': {
								borderColor: 'black'
							}
						}}>
						<Box
							sx={{
								display: 'flex',
								gap: 2,
								flexDirection: 'column'
							}}>
							<motion.div whileHover={{ scale: 1.3 }}>
								<IconButton
									aria-describedby={id}
									onClick={(
										event: MouseEvent<HTMLButtonElement>
									) => handleIconClick(event, 'phone')}>
									<PhoneIcon sx={{ fontSize: 30 }} />
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
									<Typography sx={{ p: 1 }}>
										Copied!
									</Typography>
								</Popover>
							</motion.div>
							<motion.div whileHover={{ scale: 1.3 }}>
								<IconButton
									aria-describedby={id}
									onClick={(
										event: MouseEvent<HTMLButtonElement>
									) => handleIconClick(event, 'email')}>
									<EmailIcon sx={{ fontSize: 30 }} />
								</IconButton>
							</motion.div>
							<motion.div whileHover={{ scale: 1.3 }}>
								<IconButton
									LinkComponent="a"
									target="blank"
									href="https://www.linkedin.com/in/khan-io/">
									<LinkedInIcon sx={{ fontSize: 30 }} />
								</IconButton>
							</motion.div>
							<motion.div whileHover={{ scale: 1.3 }}>
								<IconButton
									LinkComponent="a"
									target="blank"
									href="https://github.com/khan-develops">
									<GitHubIcon sx={{ fontSize: 30 }} />
								</IconButton>
							</motion.div>

							<motion.div whileHover={{ scale: 1 }}>
								<Tooltip title="This link is under construction!">
									<IconButton>
										<TwitterIcon sx={{ fontSize: 30 }} />
									</IconButton>
								</Tooltip>
							</motion.div>
							<motion.div whileHover={{ scale: 1 }}>
								<Tooltip title="This link is under construction!">
									<IconButton>
										<InstagramIcon sx={{ fontSize: 30 }} />
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
									<HomeIcon
										color="info"
										sx={{ fontSize: 50 }}
									/>
								</IconButton>
							</motion.div>
						</Box>
					</Divider>
				</Grid>
				<Box sx={{ position: 'absolute', bottom: 5 }}>
					<Fade in={trigger}>
						<Fab
							onClick={() => ref.current?.scrollTo(0)}
							sx={{ marginBottom: 4 }}>
							<KeyboardArrowUpIcon fontSize="large" />
						</Fab>
					</Fade>
				</Box>
			</Box>
		</Box>
	);
};

export default Profile;
