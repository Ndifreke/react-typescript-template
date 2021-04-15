import { Avatar, Box, Flex } from '@chakra-ui/react'
import { colors } from 'lib/theme'
import React from 'react'
import { BsBell, BsBellFill } from 'react-icons/bs'
import Icon from 'components/icon'
import Small from 'components/typography/Small'

export default () => (
	<Box position="relative">
		<Flex
			zIndex="banner"
			top="-9px"
			right="-4px"
			position="absolute"
			width={4}
			height={4}
			align="center"
			justify="center"
			backgroundColor="white"
			borderRadius={360}
		>
			<Small backgroundColor="red" variant="semibold12" textAlign="center" boxSize={4} fontSize={9} color="white" rounded={360} letterSpacing={0}>
				{' '}
				90
			</Small>
		</Flex>
		<Avatar size="xs" />
	</Box>
)
