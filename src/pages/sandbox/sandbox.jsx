import React from 'react';
import { withTheme } from 'styled-components';

import { Page, Button, HeaderWrapper, TextSpan } from './sandbox.styles';

import { useThemeSwitch } from '../../hooks';

const Sandbox = () => {
	const switchTheme = useThemeSwitch();

	return (
		<Page>
			<HeaderWrapper>
				<TextSpan>Welcome to Tailwind CSS + Styled-components</TextSpan>
			</HeaderWrapper>
			<Button onClick={switchTheme}>Change Theme</Button>
		</Page>
	);
};

export default withTheme(Sandbox);
