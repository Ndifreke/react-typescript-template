import { colors } from 'lib/theme'
import { fontWeight, fontFamily, textSizes } from './config'
import { BodyTypography, TypographyPropType } from './types'
import { Text } from '@chakra-ui/react'
import React from 'react'

const Body = ({ className = '', color, ...others }: TypographyPropType) => {
	//const { fontFamily: font, fontSize, fontWeight: weight, space = true } = others
	const colorClass = color ? `text-${color}` : ''
	return (
		<Text
			letterSpacing={1}
			// className={classNames(`tracking-wide font-titilium  text-${color} ${className}`)}
			//color={color ? colors[color] : 'inherit'
			color={color ? colors[color] : colors['neutral-800']}
			fontFamily={fontFamily.titilliumWeb}
			// letterSpacing={space ? 1 : props.letterSpacing}
			// fontFamily={font || fontFamily.titilliumWeb}
			// fontSize={fontSize || '1rem'}
			//	fontWeight={weight || fontWeight.normal}
			// lineHeight={5}
			// style={{
			// 	color: colors[color || 'inherit'],
			// }}
			{...others}
		/>
	)
}

export default (props: BodyTypography) => {
	const { variant, className = '', alt, responsive, ...others } = props
	switch (variant) {
		case 'regular13':
			return <Body {...textSizes.textSm} {...others} />
		case 'regular14':
			return <Body {...textSizes.textBase} {...others} />
		case 'regular18':
			return <Body {...textSizes.textXtraLarge} {...others} />
		case 'semibold16':
			return <Body {...textSizes.textLarge} fontWeight={fontWeight.semiBold} {...others} />
		case 'semibold14':
			return <Body {...textSizes.textBase} fontWeight={fontWeight.semiBold} {...others} />

		case 'semibold13':
			return <Body {...textSizes.textSm} fontWeight={fontWeight.semiBold} {...others} />
		case 'regular12':
			return <Body {...textSizes.textXs} {...others} />
		case 'semibold12':
			return <Body {...textSizes.textXs} fontWeight={fontWeight.semiBold} {...others} />
		case 'regular11':
			return <Body {...textSizes.textXXs} {...others} />
		case 'semibold11':
			return <Body {...textSizes.textXXs} fontWeight={fontWeight.semiBold} {...others} />
		case 'bold14':
			return <Body {...textSizes.textSm} fontWeight={fontWeight.extrabold} {...others} />
		case 'bold18':
			return <Body {...textSizes.textXtraLarge} fontWeight={fontWeight.bold} {...others} />
		case 'semibold18':
			return <Body {...textSizes.textXtraLarge} fontWeight={fontWeight.semiBold} {...others} />

		default:
			return alt ? <Body {...textSizes.textSm} fontWeight={fontWeight.semiBold} {...others} /> : <Body {...textSizes.textBase} {...others} />
	}
}
