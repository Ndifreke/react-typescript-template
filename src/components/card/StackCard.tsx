//@ts-nocheck

import { BoxProps, Stack, StackProps } from '@chakra-ui/layout'
import { colors } from 'lib/theme'
import React from 'react'

type CustomStackProps = {
	responsive?: boolean
}
export default ({ responsive, ...props }: StackProps & CustomStackProps) => (
	<Stack 
	className='stack-card'
		py={{ base: props.padding || props.p || props.py || 6, md: props.padding || props.p || props.py || 8 }}
		px={{ base: props.padding || props.p || props.px || 4, md: props.padding || props.p || props.px || 8 }}
		border={{ md: '1px solid #DFE0EB' }}
		bg={{ md: props.background || 'white' }}
		rounded={{ md: 'md', base: responsive ? 'none' : 'md' }}
		//	pb={{ base: 4, md: 0 }}
		//	mb={4}
		{...props}
	/>
)
