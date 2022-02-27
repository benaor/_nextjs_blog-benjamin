import * as React from 'react'
import Navbar from '../../organisms/Navbar'

const PageWithNavbar = () => {
  return (
    <div data-testid="PageWithNavbar">
      <Navbar />
      <p>Page with Navbar</p>
    </div>
  )
}

export default PageWithNavbar
