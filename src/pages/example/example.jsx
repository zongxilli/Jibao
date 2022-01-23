import React from 'react';
import { withTheme } from 'styled-components';

import { Page, Button, HeaderWrapper, TextSpan } from './example.styles';

import { useThemeSwitch } from '../../hooks';

const Example = () => {
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

export default withTheme(Example);
