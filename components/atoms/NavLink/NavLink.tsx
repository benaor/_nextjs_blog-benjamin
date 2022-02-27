import React from 'react'
import { PropType } from './NavLink.types'
import Link from 'next/link'

const NavLink = ({ name, to, isActive }: PropType) => {
  return (
    <li
      data-testid="NavLink"
      style={{ fontFamily: 'AbhayaLibre-Regular', fontWeight: isActive ? 'bold' : '' }}
    >
      <Link href={String(to)}>{name && name}</Link>
    </li>
  )
}

export default NavLink
