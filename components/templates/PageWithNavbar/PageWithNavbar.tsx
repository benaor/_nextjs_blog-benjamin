import * as React from 'react'
import Footer from '../../organisms/Footer'
import Navbar from '../../organisms/Navbar'
import { PropType } from './PageWithNavbar.types'

const PageWithNavbar = ({ children }: PropType) => {
  return (
    <div data-testid="PageWithNavbar">
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default PageWithNavbar
