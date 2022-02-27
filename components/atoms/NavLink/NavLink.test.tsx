import { render } from '@testing-library/react'
import NavLink from '.'
import { PropType } from './NavLink.types'

const { name, to }: PropType = {
  name: 'Test',
  to: '#test'
}

describe('NavLink', () => {
  test('should render correctly with all props', () => {
    render(<NavLink name={name} to={to} />).getByTestId('NavLink')
  })

  test('should render with correctly name', () => {
    render(<NavLink name={name} to={to} />).getByText(String(name))
  })
})
