import { Accordion, AccordionItem, AccordionButton, Box, AccordionIcon, AccordionPanel, Stack, Flex, HStack } from '@chakra-ui/react'
import Body from 'components/typography/Body'
import React from 'react'
import { HiChevronDown } from 'react-icons/hi'
import { IconType } from 'react-icons/lib'
import { MdArrowDropDown } from 'react-icons/md'

import { NavItemType } from './type'

const Item = ({ config }: { config: NavItemType }) => {
	//@ts-ignore
	const Icon: IconType = config.icon
	switch (config.type) {
		case 'group':
			return <Group config={config} />
		case 'item':
			return (
				<HStack pl={4} py={3} background="blue.800">
					{Icon && <Icon color="white" size={20} />}
					<Body
						variant="regular13"
						color="white"
						//	lineHeight='2'
					>
						{config.title}
					</Body>
				</HStack>
			)
		case 'section':
			return <ItemSection config={config} />
	}
}

const ItemSection = ({ config }: { config: NavItemType }) => {
	return (
		<Box pl={6} py={5}>
			<Body fontSize="x-small" letterSpacing={4} textTransform="uppercase" color="white">
				{config.title}
			</Body>
		</Box>
	)
}

const Group = ({ config }: { config: NavItemType }) => {
	return (
		<Box>
			<Flex pl={6} pr={4} py={2} align="center" justify="space-between" color="white">
				<Body variant="regular14" color="white">
					{config.title}
				</Body>
				<HiChevronDown />
			</Flex>

			<Stack>
				{config.items?.map((items) => (
					<Item config={items} />
				))}
			</Stack>
		</Box>
	)
}

const Items = ({ config }: { config: NavItemType[] }) => {
	return config.map((item) => {
		switch (item.type) {
			case 'group':
				return <Group config={item} />
			case 'item':
				return <Item config={item} />
			case 'section':
				return <ItemSection config={item} />
			default:
				return <Group config={item} />
		}
	})
}

export default Items
