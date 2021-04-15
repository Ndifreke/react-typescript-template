import React from 'react'
import Heading from './Heading'
import { HeadingTypographyProps } from './types'

export default (props: HeadingTypographyProps) => {
	return <Heading variant="h4" {...props} />
}
