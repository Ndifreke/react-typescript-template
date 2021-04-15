export interface ColorType {
	inherit: string
	transparent: string
	'neutral-20': string
	'neutral-30': string
	'neutral-40': string
	'neutral-50': string
	'neutral-60': string
	'neutral-70': string
	'neutral-80': string
	'neutral-90': string
	'neutral-100': string
	'neutral-200': string
	'neutral-300': string
	'neutral-400': string
	'neutral-500': string
	'neutral-600': string
	'neutral-700': string
	'neutral-800': string
	'neutral-900': string

	white: string
	'red-50': string
	'red-75': string
	'red-100': string
	'red-200': string
	'red-300': string
	'red-400': string
	'red-500': string
	red: string
	'red-900': string
	'blue-800': string
	'blue-700': string
	'blue-600': string

	'green-50': string
	'green-75': string
	'green-100': string
	'green-200': string
	'green-300': string
	'green-400': string
	'green-500': string
	green: string
	'green-900': string
	'deep-green': string

	'teal-50': string
	'teal-75': string
	'teal-100': string
	'teal-200': string
	'teal-300': string
	'teal-400': string
	'teal-500': string

	'purple-50': string
	'purple-75': string
	'purple-100': string
	'purple-200': string
	'purple-300': string
	'purple-400': string
	'purple-500': string

	'blue-50': string
	'blue-75': string
	'blue-100': string
	'blue-200': string
	'blue-300': string
	'blue-500': string
	'blue-400': string
	blue: string
	'blue-900': string
	'blue-light': string

	'yellow-50': string
	'yellow-75': string
	'yellow-100': string
	'yellow-200': string
	'yellow-300': string
	'yellow-400': string
	'yellow-500': string

	'grey-100': string
	'grey-200': string
	'grey-300': string
	grey: string
	'grey-400': string
	'grey-500': string
	'grey-600': string
	'grey-700': string
	'grey-900': string

	'body-heighlight': string
	'shadow-100': string
	'shadow-200': string
	'shadow-300': string
	'black-100': string
	'neutral-light': string
	secondary: string
	'secondary-light': string
	'secondary-dark': string
	primary: string
	'primary-light': string
	'primary-dark': string
	'black-900': string
	black: string
	purple: string
	yellow: string
	orange: string
	'orange-200': string
	'orange-300': string
	background: string
	'background-secondary': string
	'background-heighlight-secondary': string
	'background-heighlight': string
}

export interface AppTheme {
	colors: ColorType
}

// export type Color = keyof LocalTheme['colors']

// declare module 'styled-components' {
// 	export interface DefaultTheme extends AppTheme {}
// }
