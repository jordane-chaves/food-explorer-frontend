export const theme = {
  colors: {
    light: {
      100: '#ffffff',
      200: '#fffaf1',
      300: '#e1e1e6',
      400: '#c4c4cc',
      500: '#7c7c8a',
      600: '#76797b',
      700: '#4d585e',
    },
    dark: {
      100: '#000405',
      200: '#00070a',
      300: '#000204',
      400: '#000a0f',
      500: '#000c12',
      600: '#00111a',
      700: '#001119',
      800: '#0d161b',
      900: '#0d1d25',
      1000: '#192227',
    },
    tomato: {
      600: '#ab4d55',
      700: '#ab222e',
      800: '#92000e',
      900: '#750310',
    },
    carrot: {
      300: '#fba94c',
    },
    mint: {
      500: '#04d361',
    },
    cake: {
      200: '#82f3ff',
      800: '#065e7c',
    },
    gradients: {
      100: 'linear-gradient(90deg, rgba(0, 10, 15, 0) 0%, #000A0F 100%)',
      200: 'linear-gradient(180deg, #091E26 0%, #00131C 100%)',
    },
  },
  screens: {
    sm: '(min-width: 640px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1024px)',
    xl: '(min-width: 1280px)',
    '2xl': '(min-width: 1536px)',
  },
} as const

export type ThemeType = typeof theme
