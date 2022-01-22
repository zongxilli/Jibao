import GlobalStyles from './globalStyles';
import { LightColors, DarkColors } from './colors';
import Fonts from './fonts';

const getTheme = (themeName) => {
	switch (themeName) {
		case 'light':
			return {
				name: 'light',
				colors: LightColors,
				fonts: Fonts,
				images: null,
			};

		case 'dark':
			return {
				name: 'light',
				colors: DarkColors,
				fonts: Fonts,
				images: null,
			};

		default:
			return {
				name: 'light',
				colors: LightColors,
				fonts: Fonts,
				images: null,
			};
	}
};

export { GlobalStyles, getTheme, LightColors, DarkColors, Fonts };
