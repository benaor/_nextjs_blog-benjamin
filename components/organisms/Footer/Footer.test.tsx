import { render } from '@testing-library/react'
import Footer from '.'

describe('Footer', () => {
  test('Should render Footer Correctly', () => {
    render(<Footer />).getByTestId('Footer')
  })
})
