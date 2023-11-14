import {
	Box,
	Divider,
	Grid,
	IconButton,
	Popover,
	Tooltip,
	Typography
} from '@mui/material';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PhoneIcon from '@mui/icons-material/Phone';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
import { useState, MouseEvent } from 'react';

const SocialMediaLinks = () => {
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

	return (
		<Grid container height="100%" width={100} position="absolute">
			<Divider
				orientation="vertical"
				sx={{
					'&::before, &::after': {
						borderColor: 'whitesmoke'
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
							sx={{ color: 'whitesmoke' }}
							onClick={(event: MouseEvent<HTMLButtonElement>) =>
								handleIconClick(event, 'phone')
							}>
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
							<Typography sx={{ p: 1 }}>Copied!</Typography>
						</Popover>
					</motion.div>
					<motion.div whileHover={{ scale: 1.3 }}>
						<IconButton
							aria-describedby={id}
							sx={{ color: 'whitesmoke' }}
							onClick={(event: MouseEvent<HTMLButtonElement>) =>
								handleIconClick(event, 'email')
							}>
							<EmailIcon sx={{ fontSize: 30 }} />
						</IconButton>
					</motion.div>
					<motion.div whileHover={{ scale: 1.3 }}>
						<IconButton
							sx={{ color: 'whitesmoke' }}
							LinkComponent="a"
							target="blank"
							href="https://www.linkedin.com/in/khan-io/">
							<LinkedInIcon sx={{ fontSize: 30 }} />
						</IconButton>
					</motion.div>
					<motion.div whileHover={{ scale: 1.3 }}>
						<IconButton
							sx={{ color: 'whitesmoke' }}
							LinkComponent="a"
							target="blank"
							href="https://github.com/khan-develops">
							<GitHubIcon sx={{ fontSize: 30 }} />
						</IconButton>
					</motion.div>

					<motion.div whileHover={{ scale: 1 }}>
						<Tooltip title="This link is under construction!">
							<IconButton sx={{ color: 'whitesmoke' }}>
								<TwitterIcon sx={{ fontSize: 30 }} />
							</IconButton>
						</Tooltip>
					</motion.div>
					<motion.div whileHover={{ scale: 1 }}>
						<Tooltip title="This link is under construction!">
							<IconButton sx={{ color: 'whitesmoke' }}>
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
						<IconButton
							component={Link}
							to="/"
							sx={{ color: 'black' }}>
							<HomeIcon sx={{ fontSize: 50, color: 'black' }} />
						</IconButton>
					</motion.div>
				</Box>
			</Divider>
			<Grid item></Grid>
		</Grid>
	);
};

export default SocialMediaLinks;
