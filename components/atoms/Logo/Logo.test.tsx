import { render } from '@testing-library/react'
import Logo from '.'

const fontFamily = (element: any) => window.getComputedStyle(element).fontFamily
const fontSize = (element: any) => window.getComputedStyle(element).fontSize
const name: String = 'Test'

describe('Logo', () => {
  test('Should render Logo correctly', () => {
    render(<Logo />).getByTestId('Logo')
  })

  test('Should render Logo correctly with specific Name', () => {
    const name = 'Benjamin'
    render(<Logo name={name} />).getByText(name)
  })

  test('Should render Logo correctly with specific Name', () => {
    render(<Logo />).getByText('BENJAMIN GIRARD')
  })

  test('Should render with the Cinzel fonts', () => {
    const wrapper = render(<Logo name={name} />)
    expect(fontFamily(wrapper.getByText(String(name)))).toBe('Cinzel-Regular')
  })

  test('Should render with the correctly fontSize', () => {
    const wrapper = render(<Logo name={name} size="12em" />)
    expect(fontSize(wrapper.getByText(String(name)))).toBe('12em')
  })
})
