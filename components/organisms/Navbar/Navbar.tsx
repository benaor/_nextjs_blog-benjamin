import * as React from 'react'
import Logo from '../../atoms/Logo'
import Navigation from '../../molecules/Navigation'
import { ListNavItemProp } from '../../molecules/Navigation/Navigation.types'

const Navbar = () => {
  const styles: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    minHeight: '100px',
    borderBottom: '1px solid #E5E5E5'
  }

  const listNavItem: Array<ListNavItemProp> = [
    {
      name: 'Accueil',
      href: '/Home'
    },
    {
      name: 'Blog',
      href: '/Blog'
    },
    {
      name: 'Qui suis-je ?',
      href: '/About'
    }
  ]

  return (
    <nav className="navbar" data-testid="Navbar" style={styles}>
      <Logo />
      <Navigation listNavItem={listNavItem} />
    </nav>
  )
}

export default Navbar
