import { NextPage } from 'next'
import React from 'react'
import PageWithNavbar from '../../components/templates/PageWithNavbar'

const Home: NextPage = () => {
  return (
    <div data-testid="Home">
      <PageWithNavbar />
    </div>
  )
}

export default Home
