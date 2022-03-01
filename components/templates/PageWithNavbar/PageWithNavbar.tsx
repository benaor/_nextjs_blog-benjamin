import * as React from 'react'
import Navbar from '../../organisms/Navbar'
import { PropType } from './PageWithNavbar.types'

const PageWithNavbar = ({ children }: PropType) => {
  return (
    <div data-testid="PageWithNavbar">
      <Navbar />
      {children}
    </div>
  )
}

export default PageWithNavbar
