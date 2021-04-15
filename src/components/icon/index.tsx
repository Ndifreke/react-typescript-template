// import { Color } from '@types'
import { Box, BoxProps } from '@chakra-ui/react'
import React from 'react'
import { IconType } from 'react-icons/lib'

export type IconProps = BoxProps & { iconComp: IconType }
const Icon = (props: IconProps) => {
	const { boxSize = 5, iconComp, ...others } = props
	return <Box as={iconComp} boxSize={boxSize} {...others} />
}

export default React.memo(Icon)
