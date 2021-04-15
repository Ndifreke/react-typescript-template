import { Avatar, Box, Input, Stack } from '@chakra-ui/react'
import React from 'react'
import Header from './header'
import { NavItemType } from './navigation/type'
import Navigations from './navigation/Navigation'
import { RiHome4Line, RiStockLine, RiStore3Line } from 'react-icons/ri'
import { IoBriefcaseOutline, IoSettingsOutline, IoWalletOutline } from 'react-icons/io5'
import { GiArcheryTarget } from 'react-icons/gi'
import { GrTransaction } from 'react-icons/gr'
import { AiOutlineGift } from 'react-icons/ai'
import { BiTransfer } from 'react-icons/bi'
import Small from 'components/typography/Small'
import { HiChevronDown } from 'react-icons/hi'
import Body from 'components/typography/Body'

const configs: NavItemType[] = [ 
	{
		type: 'section',
		title: 'Home',
	},
	{
		type: 'item',
		title: 'Dashboard',
		icon: RiHome4Line,
	},
	{
		type: 'section',
		title: 'INVESTMENTS',
	},
	{
		type: 'item',
		title: 'My Portfolio',
		icon: IoBriefcaseOutline,
	},
	{
		type: 'item',
		title: 'Investment Catalogue',
		icon: RiStore3Line,
	},
	{
		type: 'item',
		title: 'Goals',
		icon: GiArcheryTarget,
	},
	{
		type: 'section',
		title: 'Transactions',
		icon: RiHome4Line,
	},
	{
		type: 'item',
		title: 'Wallet & Redemption',
		icon: IoWalletOutline,
	},
	{
		type: 'item',
		title: 'Transactions',
		icon: BiTransfer,
	},
	{
		type: 'item',
		title: 'Stock Trading',
		icon: RiStockLine,
	},
	{
		type: 'item',
		title: 'Referals',
		icon: AiOutlineGift,
	},
	{
		type: 'section',
		title: 'Settings',
	},
	{
		type: 'group',
		title: 'Settings',
		icon: IoSettingsOutline,

	},
]

const Navigation = ({ children }) => {
	return (
		<Stack direction="row">
			<Box w="full">
				<Input type="checkbox" id="nav-toggle" display="none" />
				<Box
					zIndex="sticky"
					as="aside"
					className="nav"
					background="#00287E"
					w="3xs"
					position="fixed"
					top={0}
					bottom={0}
					//display={{ base: 'none', md: 'block' }}
				> 
					<Stack align="center" color="white" py={5} pl={5} direction="row" alignItems="center">
						<Avatar size="sm" />
						<Body color="white" variant="semibold13">
							Ndifreke Ekim
						</Body>
						<HiChevronDown />
					</Stack>
					{/* @ts-ignore */}
					<Navigations config={configs} />
				</Box>
				<Box className="main-pusher">
					<Box position="sticky" top="0" zIndex="sticky">
						<Header />
					</Box>

					<Box>{children}</Box>
				</Box>
			</Box>
		</Stack>
	)
}

export default Navigation
