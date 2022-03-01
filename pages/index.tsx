import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Home from './Home'

const Index: NextPage = () => {
  const router = useRouter()

  useEffect(() => {
    router?.push('/Home')
  })

  return (
    <div data-testid="Index">
      {/* Waiting for dev a customable componant */}
      <Home />
    </div>
  )
}

export default Index
