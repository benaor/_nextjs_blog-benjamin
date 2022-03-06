import * as React from 'react'
import { PropType } from './WebsiteSignature.types'

const WebsiteSignature: React.FunctionComponent<PropType> = ({ style }: PropType) => {
  const styles: React.CSSProperties = {
    padding: '30px 0',
    textAlign: 'center',
    fontFamily: 'Montserrat',
    ...style
  }
  return (
    <div data-testid="WebsiteSignature" style={styles}>
      <p>
        © 2021 - All rights reserved. <br />
        Thanks{' '}
        <a href="https://www.nordicrose.co.uk/" target="_blank" rel="noreferrer">
          nordicrose
        </a>{' '}
        for inspiration <br />
        ❤️
      </p>
    </div>
  )
}

export default WebsiteSignature
