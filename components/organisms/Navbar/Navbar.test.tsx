import { render } from '@testing-library/react'
import Navbar from '.'

describe('Navbar', () => {
  test('should render correctly', () => {
    render(<Navbar />).getByTestId('Navbar')
  })
  test('should contain logo', () => {
    render(<Navbar />).getByTestId('Logo')
  })
})
