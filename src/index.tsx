import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements
} from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
	typography: {
		fontFamily: ['Roboto Mono', 'monospace'].join(',')
	}
});

const router = createBrowserRouter(
	createRoutesFromElements(<Route path="/*" element={<App />} />)
);

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<ThemeProvider theme={theme}>
		<React.StrictMode>
			<RouterProvider router={router} />
		</React.StrictMode>
	</ThemeProvider>
);

reportWebVitals();
