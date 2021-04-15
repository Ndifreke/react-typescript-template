import Body from './Body'
import { BodyTypography } from './types'
import { fontFamily } from './config'

export default ({ alt, className, ...props }: BodyTypography) => (
	<Body fontFamily={fontFamily.blackerDisplay} color="primary" lineHeight={6} variant={alt ? 'semibold14' : 'semibold16'} {...props} />
)
