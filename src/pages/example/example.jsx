import React from 'react';
import { withTheme } from 'styled-components';

import { StyledPage, StyledButton, StyledHeader } from './example.styles';

import { useThemeSwitch } from '../../hooks';

const Example = () => {
	const switchTheme = useThemeSwitch();

	return (
		<StyledPage>
		<StyledHeader>Welcome to Tailwind CSS + Styled-components</StyledHeader>
			<StyledButton onClick={switchTheme}>Change Theme</StyledButton>
		</StyledPage>
	);
};

export default withTheme(Example);
