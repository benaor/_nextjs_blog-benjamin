import { CSSProperties } from 'react'

export type PropType = {
  networks: Array<SocialLinkType>
  style?: CSSProperties
}

export type SocialLinkType = {
  name: string
  link: string
}
