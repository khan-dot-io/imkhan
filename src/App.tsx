import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Portfolio from './pages/profile/Profile';
import { AnimatePresence, motion } from 'framer-motion';
import background from './common/images/bgArrow.png';
import bgLight from './common/images/bgLight.png';
import SocialMediaLinks from './components/socialMediaLinks/SocialMediaLinks';

function App() {
	const location = useLocation();
	return (
		<motion.div
			style={{ position: 'relative', width: '100%', height: '100%' }}>
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
			<motion.div
				style={{
					position: 'absolute',
					backgroundImage: `url(${bgLight})`,
					backgroundSize: 'cover',
					height: '100%',
					zIndex: 0
				}}
				animate={{
					width: location.pathname === '/' ? '100%' : '700px'
				}}
				transition={{ duration: 1 }}
			/>
		</motion.div>
	);
}

export default App;
