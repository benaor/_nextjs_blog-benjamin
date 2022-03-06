import * as React from 'react'
import { PropType } from './Logo.types'

const Logo: React.FunctionComponent<PropType> = ({ style, name }: PropType) => {
  return (
    <div
      data-testid="Logo"
      style={{
        fontSize: '46px',
        display: 'flex',
        fontFamily: 'Cinzel-Regular',
        margin: 'auto 0',
        ...style
      }}
    >
      <h1> {name ? name : 'BENJAMIN GIRARD'}</h1>
    </div>
  )
}

export default Logo
