import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { AnimatePresence } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';

import { getTheme, GlobalStyles } from './themes';
import { Home } from './pages';

const App = () => {
	const location = useLocation();
	const [themeName, setThemeName] = useState('light');

	const renderGlobalComponents = () => (
		<>
			<GlobalStyles />
			<ReactTooltip effect='float' />
		</>
	);

	const renderRoutes = () => (
		<Routes location={location} key={location.pathname}>
			<Route exact path='/' element={<Home />} />
		</Routes>
	);

	return (
		<>
			{renderGlobalComponents()}

			<ThemeProvider theme={getTheme(themeName)}>
				<AnimatePresence exitBeforeEnter>
					{renderRoutes()}
				</AnimatePresence>
			</ThemeProvider>
		</>
	);
};

export default App;
