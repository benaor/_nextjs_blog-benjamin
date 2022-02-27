import * as React from 'react'
import Logo from '../../atoms/Logo'

const Navbar = () => {
  const styles: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between'
  }

  return (
    <nav className="navbar" data-testid="Navbar" style={styles}>
      <Logo />
    </nav>
  )
}

export default Navbar
