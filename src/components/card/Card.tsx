//@ts-nocheck
import { BoxProps, FlexProps } from '@chakra-ui/layout'
import { Box } from '@chakra-ui/react'
import React from 'react'

export default (props: BoxProps & FlexProps) => (
	<Box
		py={{ base: props.padding || props.p || props.py || 6, md: props.padding || props.p || props.py || 8 }}
		px={{ base: props.padding || props.p || props.px || 4, md: props.padding || props.p || props.px || 8 }}
		pt={{ base: props.padding || props.p || props.pt || props.py || 6, md: props.padding || props.p || props.pt || props.py || 8 }}
		pb={{ base: props.padding || props.p || props.pb || props.py || 6, md: props.padding || props.p || props.pb || props.py || 8 }}
		border={{ md: '1px solid #DFE0EB' }}
		bg={{ md: props.background || 'white' }}
		rounded={{ md: 'md' }}
		{...props}
	/>
)
