import { BoxProps, TextProps } from '@chakra-ui/react'
import { AppTheme } from '@types'
export type Color = keyof AppTheme['colors']

// const Typography = styled(Text)``

type TypographyBaseType = {
	alt?: boolean
	color?: Color
	responsive?: boolean
	space?: boolean
}

export type HeadingTagProps = BoxProps &
	Omit<TypographyBaseType, 'alt'> & {
		variant: 'h2' | 'h3' | 'h3' | 'h4' | 'h5' | 'h6'
		className?: string
	}

export type BodyVariantType =
	| 'regular16'
	| 'regular14'
	| 'regular13'
	| 'regular18'
	| 'regular12'
	| 'semibold16'
	| 'semibold14'
	| 'semibold13'
	| 'bold14'
	| 'bold18'
	| 'semibold12'
	| 'semibold18'
	| 'regular11'
	| 'semibold11'
export type TypographyPropType = TypographyBaseType & Omit<TextProps, 'color'>

export type BodyTypography = TypographyPropType & { variant?: BodyVariantType }

export type HeadingVariantType = 'h4' | 'h3' | 'h2' | 'h1' | 'h5' | 'h6'
export type HeadingTypographyProps = TypographyPropType & { variant?: HeadingVariantType }
