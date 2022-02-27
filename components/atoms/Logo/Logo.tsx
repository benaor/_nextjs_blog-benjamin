import * as React from 'react'
import { PropType } from './Logo.types'

const Logo = ({ size = '46px', name }: PropType) => {
  return (
    <div data-testid="Logo">
      <h1 style={{ fontSize: String(size), fontFamily: 'Cinzel-Regular' }}>
        {' '}
        {name ? name : 'BENJAMIN GIRARD'}
      </h1>
    </div>
  )
}

export default Logo
