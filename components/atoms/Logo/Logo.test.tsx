import { render } from '@testing-library/react'
import Logo from '.'

const name: String = 'Test'

describe('Logo', () => {
  test('Should render Logo correctly', () => {
    render(<Logo />).getByTestId('Logo')
  })

  test('Should render Logo correctly with specific Name', () => {
    render(<Logo name={name} />).getByText(String(name))
  })

  test('Should render Logo correctly without specific Name', () => {
    render(<Logo />).getByText('BENJAMIN GIRARD')
  })
})
