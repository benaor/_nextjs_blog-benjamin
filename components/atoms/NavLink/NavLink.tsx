import React, { useEffect, useState } from 'react'
import { PropType } from './NavLink.types'
import { useRouter } from 'next/router'

const NavLink = ({ href, children }: PropType) => {
  const [isActive, setisActive] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if (router?.asPath === href) setisActive(true)
  }, [router])

  const style = {
    fontFamily: 'AbhayaLibre-Regular',
    fontWeight: isActive ? 'bold' : '',
    margin: 'auto',
    padding: '10px'
  }

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <a href={href} data-testid="NavLink" onClick={handleClick} style={style}>
      {children}
    </a>
  )
}

export default NavLink
