import { theme as twTheme } from 'twin.macro';

export const LightColors = {
  twText: twTheme`colors.neutral.900`,
  twTextRgba: '23, 23, 23',

  twSubText: twTheme`colors.neutral.500`,
  twSubTextRgba: '115, 115, 115',

  twBackground: twTheme`colors.neutral.100`,
  twBackgroundRgba: '245, 245, 245',

  twLink: twTheme`colors.indigo.600`,

  twIndigo: twTheme`colors.indigo.400`,
  twIndigoDark: twTheme`colors.indigo.500`,

  twWave: twTheme`colors.sky.500`,
};

export const DarkColors = {
  twText: twTheme`colors.slate.50`,
  twTextRgba: '248, 250, 252',

  twSubText: twTheme`colors.neutral.400`,
  twSubTextRgba: '163, 163, 163',

  twBackground: twTheme`colors.neutral.800`,
  twBackgroundRgba: '38, 38, 38',

  twLink: twTheme`colors.indigo.300`,

  twIndigo: twTheme`colors.indigo.500`,
  twIndigoDark: twTheme`colors.indigo.300`,

  twWave: twTheme`colors.cyan.500`,
};
