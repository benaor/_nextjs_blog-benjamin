import { render } from '@testing-library/react'
import Navigation from '.'
import { PropType } from './Navigation.types'

const props: PropType = {
  listNavItem: [{ name: 'Test', href: '/Test' }]
}
describe('Navigation', () => {
  test('should render correctly navigation', () => {
    render(<Navigation {...props} />).getByTestId('Navigation')
  })
})
