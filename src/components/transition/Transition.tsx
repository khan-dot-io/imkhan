import { motion } from 'framer-motion';
import { Fragment } from 'react';
import './Transition.css';

const Transition = (Component: () => JSX.Element): (() => JSX.Element) => {
	return () => (
		<Fragment>
			<Component />
			<motion.div
				className="slide-in"
				initial={{ scaleY: 0 }}
				animate={{ scaleY: 0 }}
				exit={{ scaleY: 1 }}
				transition={{
					duration: 1,
					ease: [0.22, 1, 0.6, 1]
				}}
			/>
			<motion.div
				className="slide-out"
				initial={{ scaleY: 1 }}
				animate={{ scaleY: 0 }}
				exit={{ scaleY: 0 }}
				transition={{
					duration: 1,
					ease: [0.22, 1, 0.6, 1]
				}}
			/>
		</Fragment>
	);
};

export default Transition;
