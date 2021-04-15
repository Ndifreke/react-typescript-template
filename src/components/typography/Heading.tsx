
import { Text } from '@chakra-ui/react'
import { colors } from 'lib/theme'
import React from 'react'
import { fontFamily, fontSize, fontWeight, lineHeight } from './config'

import { HeadingTypographyProps, TypographyPropType } from './types'

const Heading = ({ variant = 'h1', color = 'primary', alt, ...others }: TypographyPropType) => {
	//console.log(fontSize[variant])
	return (
		<Text
			fontWeight={fontWeight.bold}
			lineHeight={lineHeight[variant]}
			fontSize={fontSize[variant]}
			fontFamily={fontFamily.blackerDisplay}
			letterSpacing={1}
			color={color ? colors[color] : colors.primary}
			{...others}
		/>
	)
}

export default (props: HeadingTypographyProps) => {
	const { ...others } = props

	switch (props.variant) {
		case 'h5':
			return <Heading {...others} />
		case 'h4':
			return <Heading {...others} />
		case 'h3':
			return <Heading {...others} />
		case 'h2':
			return <Heading {...others} />
		case 'h1':
			return <Heading {...others} />
		case 'h6':
		default:
			return <Heading {...others} />
	}
}
