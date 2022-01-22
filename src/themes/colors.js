import { theme } from 'twin.macro';

export const LightColors = {
	twText: theme`colors.neutral.900`,
	twBackground: theme`colors.indigo.50`,
	twIndigo: theme`colors.indigo.400`,

	overlay: 'rgba(0, 0, 0, 0.3)',

	whiteDefault: '#ffffff',
	blackDefault: '#000000',

	// SEMANTIC colors
	// system: backgrounds that are truly behind everything
	// (e.g: bg for slice view, etc)
	systemBackgroundPrimary: '#FBFBFB', // regular
	systemBackgroundSecondary: '#F1F1F1', // when hovered, pressed, etc
	systemBackgroundTertiary: '#EEEEEE', // disabled

	// elevated: backgrounds for UI components that sit on top of the system background
	// (e.g: card, dropdowns, modals, etc)
	elevatedBackgroundPrimary: '#FFFFFF', // regular
	elevatedBackgroundSecondary: '#F8F8F8', // when hovered, pressed, etc
	elevatedBackgroundTertiary: '#EFEFEF', // disabled

	// use for text
	textPrimary: '#000000', // regular
	textSecondary: '#7F7F7F', // captions, subtitles
	textTertiary: '#A8A8A8', // disabled

	// DECLARATIVE colors
	// ideally for borders, special UI elements (e.g. certain icons, alerts)
	// use as needed
	grey1: '#FFFFFF',
	grey2: '#F2F2F7',
	grey3: '#E5E5EA',
	grey4: '#AEAEB2',
	grey5: '#8E8E93',
	grey6: '#19191B',

	purpleExtraLight: '#C8ADF9',
	purpleLight: '#A852FF',
	purpleDefault: '#810BF8',
	purpleDark: '#5E16BA',

	greenExtraLight: '#A4E4D4',
	greenLight: '#23D8B6',
	greenDefault: '#1DBC94',
	greenDark: '#17A078',

	yellowExtraLight: '#FEE199',
	yellowLight: '#FFE26A',
	yellowDefault: '#FED941',
	yellowDark: '#FDB300',

	redLight: '#FF8686',
	redDefault: '#FE4141',
	redDark: '#D93838',

	blueLight: '#AED6F1',
	blueDefault: '#5DADE2',
	blueDark: '#2E86C1',
};

export const DarkColors = {
	twText: theme`colors.indigo.50`,
	twBackground: theme`colors.neutral.900`,
	twIndigo: theme`colors.indigo.500`,

	overlay: 'rgba(0, 0, 0, 0.5)',

	whiteDefault: '#E4E4E4',
	blackDefault: '#000000',

	// SEMANTIC colors
	systemBackgroundPrimary: '#121212',
	systemBackgroundSecondary: '#232323',
	systemBackgroundTertiary: '#272727',

	elevatedBackgroundPrimary: '#1D1D1D',
	elevatedBackgroundSecondary: '#2F2F2F',
	elevatedBackgroundTertiary: '#262626',

	textPrimary: '#E4E4E4',
	textSecondary: '#848484',
	textTertiary: '#4D4D4D',

	// DECLARATIVE colors
	grey1: '#171717',
	grey2: '#1C1C1E',
	grey3: '#343434',
	grey4: '#383838',
	grey5: '#6A6A6A',
	grey6: '#E5E5E5',

	purpleExtraLight: '#C8ADF9',
	purpleLight: '#AC77F4',
	purpleDefault: '#8B52FC',
	purpleDark: '#8655ED',

	greenExtraLight: '#A4E4D4',
	greenLight: '#1DBC94',
	greenDefault: '#17A078',
	greenDark: '#0B8E69',

	yellowExtraLight: '#FEE199',
	yellowLight: '#FED941',
	yellowDefault: '#FDB300',
	yellowDark: '#EAA500',

	redLight: '#FE4141',
	redDefault: '#D93838',
	redDark: '#D93838',

	blueLight: '#AED6F1',
	blueDefault: '#5DADE2',
	blueDark: '#2E86C1',
};
