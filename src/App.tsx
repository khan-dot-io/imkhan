import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Portfolio from './pages/profile/Profile';
import { AnimatePresence, motion } from 'framer-motion';
import background from './common/images/bgArrow.png';
import bgLight from './common/images/bgLight.png';
import SocialMediaLinks from './components/socialMediaLinks/SocialMediaLinks';
import { Grid } from '@mui/material';

function App() {
	const location = useLocation();
	return (
		<Grid container>
			<Grid item>
				<motion.div
					style={{
						position: 'absolute',
						width: '100%',
						height: '100%',
						zIndex: 1
					}}>
					<AnimatePresence initial={false} mode="wait">
						<Routes key={location.pathname} location={location}>
							<Route index element={<Home />} />
							<Route path="my-profile" element={<Portfolio />} />
						</Routes>
					</AnimatePresence>
				</motion.div>
			</Grid>
			<Grid item sx={{ sx: 'none' }}>
				<motion.div
					style={{
						position: 'absolute',
						backgroundImage: `url(${bgLight})`,
						backgroundSize: 'cover',
						height: '100%',
						zIndex: 0
					}}
					animate={{
						width: location.pathname === '/' ? '100%' : '0'
					}}
					transition={{ duration: 1 }}
				/>
			</Grid>
		</Grid>
	);
}

export default App;
