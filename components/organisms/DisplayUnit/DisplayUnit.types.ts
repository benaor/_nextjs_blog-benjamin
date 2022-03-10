import { CSSProperties, ReactNode } from 'react'

export type PropType = {
  style?: CSSProperties
  title: string
  backgroundImage?: string
  color?: string
  children: ReactNode
}
