import * as React from 'react'
import NavLink from '../../atoms/NavLink'
import { PropType } from './Navigation.types'

const Navigation = (props: PropType) => {
  const style: React.CSSProperties = {
    display: 'flex'
  }

  return (
    <ul data-testid="Navigation" style={style}>
      {props?.listNavItem.map((navItem) => (
        <li key={navItem.name} style={style}>
          <NavLink href={navItem.href}>{navItem.name}</NavLink>
        </li>
      ))}
    </ul>
  )
}

export default Navigation
