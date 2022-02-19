import React from 'react';
import { ThemeProvider } from 'styled-components';
import { AnimatePresence } from 'framer-motion';
import { Route, Switch, useLocation } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import { ToastContainer } from 'react-toastify';
import { useSelector } from 'react-redux';

import { getTheme, GlobalStyles } from './themes';
import { Home, Sandbox } from './pages';

const App = () => {
	const location = useLocation();
	const { mode } = useSelector((state) => state.theme);

	const renderGlobalComponents = () => (
		<>
			<GlobalStyles />
			<ReactTooltip effect='float' />
			<ToastContainer position='bottom-left' theme='light' />
		</>
	);

	const renderRoutes = () => (
		<Switch location={location} key={location.pathname}>
			<Route exact path='/' component={Sandbox} />
			<Route exact path='/home' component={Home} />
		</Switch>
	);

	return (
		<>
			{renderGlobalComponents()}

			<ThemeProvider theme={getTheme(mode)}>
				<AnimatePresence exitBeforeEnter>
					{renderRoutes()}
				</AnimatePresence>
			</ThemeProvider>
		</>
	);
};

export default App;
