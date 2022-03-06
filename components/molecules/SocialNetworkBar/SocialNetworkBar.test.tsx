import { render } from '@testing-library/react'
import SocialNetworkBar from '.'
import { PropType } from './SocialNetworkBar.types'

const props: PropType = {
  networks: [
    { name: 'Linkedin', link: 'https://www.linkedin.com/in/benjamin-girard-3607a1197/' },
    { name: 'test', link: 'https://www.test.com/' }
  ]
}

describe('SocialNetworkBar', () => {
  test('should render correctly', () => {
    render(<SocialNetworkBar networks={props.networks} />).getAllByTestId('Linkedin')
  })
})
