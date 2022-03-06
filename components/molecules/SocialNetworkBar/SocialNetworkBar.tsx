import * as React from 'react'
import { PropType, SocialLinkType } from './SocialNetworkBar.types'

const SocialNetworkBar: React.FunctionComponent<PropType> = ({ networks, style }: PropType) => {
  const styles: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-around',
    width: '30%',
    padding: '30px 0',
    ...style
  }

  return (
    <ul data-testid="SocialNetworkBar" style={styles}>
      {networks.map((rs: SocialLinkType) => (
        <li key={rs.name}>
          <a href={rs.link} target="_blank" rel="noreferrer">
            {rs.name}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default SocialNetworkBar
