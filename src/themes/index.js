import GlobalStyles from './globalStyles';
import { LightColors, DarkColors } from './colors';
import Fonts from './fonts';
import Icons from './icons';

const getTheme = (themeName) => {
	switch (themeName) {
		case 'light':
			return {
				mode: 'light',
				colors: LightColors,
				fonts: Fonts,
				icons: Icons,
				images: null,
			};

		case 'dark':
			return {
				mode: 'dark',
				colors: DarkColors,
				fonts: Fonts,
				icons: Icons,
				images: null,
			};

		default:
			return {
				mode: 'light',
				colors: LightColors,
				fonts: Fonts,
				icons: Icons,
				images: null,
			};
	}
};

export { GlobalStyles, getTheme, LightColors, DarkColors, Fonts, Icons };
