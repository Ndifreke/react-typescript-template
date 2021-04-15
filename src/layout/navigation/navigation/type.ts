import { IconProps } from 'components/icon'
import { IconType } from 'react-icons/lib'

export type NavItemType = {
	type: 'item' | 'group' | 'section'
	title?: string
	url?: string
	items?: Array<NavItemType>
	icon?: IconType
}
