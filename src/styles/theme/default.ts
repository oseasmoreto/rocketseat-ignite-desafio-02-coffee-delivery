export const defaultColors = {
  white: '#FFF',

  'gray-100': '#FAFAFA',
  'gray-200': '#F3F2F2',
  'gray-300': '#EDEDED',
  'gray-400': '#E6E5E5',
  'gray-500': '#D7D5D5',
  'gray-600': '#8D8686',
  'gray-700': '#574F4D',
  'gray-800': '#403937',
  'gray-900': '#272221',

  'green-300': '#00B37E',
  'green-500': '#00875F',
  'green-700': '#015F43',

  'red-100': '#EB5757',
  'red-500': '#AB222E',
  'red-700': '#7A1921',

  'yellow-100': '#F1E9C9',
  'yellow-400': '#DBAC2C',
  'yellow-500': '#FBA94C',
  'yellow-600': '#C47F17',

  'purple-100': '#EBE5F9',
  'purple-200': '#8047F8',
  'purple-300': '#4B2995',
}

export const defaultTheme = {
  white: defaultColors.white,
  background: defaultColors['gray-100'],
  card: defaultColors['gray-200'],
  input: defaultColors['gray-300'],
  button: defaultColors['gray-400'],
  hover: defaultColors['gray-500'],
  label: defaultColors['gray-600'],
  text: defaultColors['gray-700'],
  subtitle: defaultColors['gray-800'],
  title: defaultColors['gray-900'],
  primary: {
    dark: defaultColors['purple-300'],
    normal: defaultColors['purple-200'],
    light: defaultColors['purple-100'],
  },
  secondary: {
    dark: defaultColors['yellow-600'],
    normal: defaultColors['yellow-400'],
    light: defaultColors['yellow-100'],
  },
  danger: {
    dark: defaultColors['red-700'],
    normal: defaultColors['red-500'],
    light: defaultColors['red-100'],
  },
  warning: {
    dark: defaultColors['yellow-600'],
    normal: defaultColors['yellow-500'],
    light: defaultColors['yellow-100'],
  },
  success: {
    dark: defaultColors['green-700'],
    normal: defaultColors['green-500'],
    light: defaultColors['green-300'],
  },
}
