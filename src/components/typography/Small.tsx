import Body from './Body'
import { BodyTypography } from './types'

export default ({ alt, ...others }: BodyTypography) => <Body variant={alt ? 'regular13' : 'regular12'} {...others} />
