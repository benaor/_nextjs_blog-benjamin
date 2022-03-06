import * as React from 'react'
import { Colors } from '../../../styles/Colors.enum'
import Logo from '../../atoms/Logo'
import Citation from '../../molecules/Citation'
import HorizontalScrollingBar from '../../molecules/HorizontalScrollingBar'
import SocialNetworkBar from '../../molecules/SocialNetworkBar'
import { SocialLinkType } from '../../molecules/SocialNetworkBar/SocialNetworkBar.types'
import WebsiteSignature from '../../molecules/WebsiteSignature'

const Footer: React.FunctionComponent = () => {
  const itemsToScroll: Array<string> = [
    'Développement web',
    'Frontend',
    'Backend',
    'Conception',
    'Javascript',
    'React',
    'TypeScript',
    'NextJS',
    'ExpressJS'
  ]

  const style: React.CSSProperties = {
    backgroundColor: Colors.BLACK,
    color: Colors.WHITE,
    width: '100%',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }

  const networks: Array<SocialLinkType> = [
    { name: 'Linkedin', link: 'https://www.linkedin.com/in/benjamin-girard-3607a1197/' },
    { name: 'Github', link: 'https://github.com/benaor' },
    { name: 'Twitter', link: 'https://twitter.com/Benjamin_Girard' }
  ]

  return (
    <footer data-testid="Footer" style={style}>
      <HorizontalScrollingBar itemsToScroll={itemsToScroll} />

      <Logo />

      <Citation author="Conor Mc Gregor">
        Il n’y a pas de talent ici, ce n’est que du travail. C’est une obsession. Le talent n’existe
        pas. En tant qu’humains, nous sommes tous égaux. Vous pouvez devenir qui vous voulez si vous
        y consacrez du temps. Vous atteindrez le sommet, c’est comme ça. Je ne suis pas talentueux.
        Je suis obsédé.
      </Citation>
      <SocialNetworkBar networks={networks} />
      <WebsiteSignature />
    </footer>
  )
}

export default Footer
