import React from 'react';
import { ThemeProvider } from 'styled-components';
import { AnimatePresence } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import { ToastContainer } from 'react-toastify';
import { useSelector } from 'react-redux';

import { getTheme, GlobalStyles } from './themes';
import { Example } from './pages';

const App = () => {
	const location = useLocation();
	const { name } = useSelector((state) => state.theme);

	const renderGlobalComponents = () => (
		<>
			<GlobalStyles />
			<ReactTooltip effect='float' />
			<ToastContainer position='bottom-left' theme='light' />
		</>
	);

	const renderRoutes = () => (
		<Routes location={location} key={location.pathname}>
			<Route exact path='/' element={<Example />} />
		</Routes>
	);

	return (
		<>
			{renderGlobalComponents()}

			<ThemeProvider theme={getTheme(name)}>
				<AnimatePresence exitBeforeEnter>
					{renderRoutes()}
				</AnimatePresence>
			</ThemeProvider>
		</>
	);
};

export default App;
