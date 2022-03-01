import { render } from '@testing-library/react'
import NavLink from '.'
import { PropType } from './NavLink.types'

const { children, href }: PropType = {
  children: 'Test',
  href: '#test'
}

describe('NavLink', () => {
  test('should render correctly with all props', () => {
    render(<NavLink href={href}>{children}</NavLink>).getByTestId('NavLink')
  })

  test('should render with correctly name', () => {
    render(<NavLink href={href}> {children}</NavLink>).getByText(String(children))
  })
})
