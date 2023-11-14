import { CardMedia, Chip, Grid, Paper, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import cssFile from '../../common/images/cssFile.png';
import error from '../../common/images/error.png';
import api from '../../common/images/api.png';
import programming from '../../common/images/programming.png';
import htmlFile from '../../common/images/htmlFile.png';
import javascript from '../../common/images/javascript.png';
import software from '../../common/images/software.png';
import website from '../../common/images/website.png';
import wireFrame from '../../common/images/wireFrame.png';
import testing from '../../common/images/testing.png';
import web from '../../common/images/web.png';
import './Skills.css';

const Skills = () => {
	return (
		<Grid
			component={Paper}
			container
			justifyContent="space-evenly"
			alignItems="center"
			spacing={2}
			width="100%"
			sx={{ paddingBottom: 2 }}>
			<Grid item>
				<motion.div
					className="Card"
					whileHover={{
						scale: 1.2
					}}>
					<CardMedia
						component="img"
						sx={{
							width: 50
						}}
						src={cssFile}
					/>
				</motion.div>
			</Grid>

			<Grid item>
				<motion.div
					className="Card"
					whileHover={{
						scale: 1.2
					}}>
					<CardMedia
						component="img"
						sx={{
							width: 50
						}}
						src={error}
					/>
				</motion.div>
			</Grid>
			<Grid item>
				<motion.div
					className="Card"
					whileHover={{
						scale: 1.2
					}}>
					<CardMedia
						component="img"
						sx={{
							width: 50
						}}
						src={programming}
					/>
				</motion.div>
			</Grid>
			<Grid item>
				<motion.div
					className="Card"
					whileHover={{
						scale: 1.2
					}}>
					<CardMedia
						component="img"
						sx={{
							width: 50
						}}
						src={software}
					/>
				</motion.div>
			</Grid>
			<Grid item>
				<motion.div
					className="Card"
					whileHover={{
						scale: 1.2
					}}>
					<CardMedia
						component="img"
						sx={{
							width: 50
						}}
						src={cssFile}
					/>
				</motion.div>
			</Grid>
			<Grid item>
				<motion.div
					className="Card"
					whileHover={{
						scale: 1.2
					}}>
					<CardMedia
						component="img"
						sx={{
							width: 50
						}}
						src={wireFrame}
					/>
				</motion.div>
			</Grid>
			<Grid item>
				<motion.div
					className="Card"
					whileHover={{
						scale: 1.2
					}}>
					<CardMedia
						component="img"
						sx={{
							width: 50
						}}
						src={website}
					/>
				</motion.div>
			</Grid>
			<Grid item>
				<motion.div
					className="Card"
					whileHover={{
						scale: 1.2
					}}>
					<CardMedia
						component="img"
						sx={{
							width: 50
						}}
						src={testing}
					/>
				</motion.div>
			</Grid>
			<Grid item>
				<motion.div
					className="Card"
					whileHover={{
						scale: 1.2
					}}>
					<CardMedia
						component="img"
						sx={{
							width: 50
						}}
						src={htmlFile}
					/>
				</motion.div>
			</Grid>
			<Grid item>
				<motion.div
					className="Card"
					whileHover={{
						scale: 1.2
					}}>
					<CardMedia
						component="img"
						sx={{
							width: 50
						}}
						src={web}
					/>
				</motion.div>
			</Grid>
			<Grid item>
				<motion.div
					className="Card"
					whileHover={{
						scale: 1.2
					}}>
					<CardMedia
						component="img"
						sx={{
							width: 50
						}}
						src={javascript}
					/>
				</motion.div>
			</Grid>
			<Grid item>
				<motion.div
					className="Card"
					whileHover={{
						scale: 1.2
					}}>
					<CardMedia
						component="img"
						sx={{
							width: 50
						}}
						src={api}
					/>
				</motion.div>
			</Grid>
		</Grid>
	);
};

export default Skills;
