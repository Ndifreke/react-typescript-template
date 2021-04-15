import Body from './Body'
import { BodyTypography } from './types'

export default ({ alt, ...others }: BodyTypography) => <Body variant={alt ? 'semibold11' : 'regular11'} {...others} />
