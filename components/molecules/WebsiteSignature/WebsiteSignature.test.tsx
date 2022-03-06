import { render } from '@testing-library/react'
import WebsiteSignature from '.'

describe('WebsiteSignature', () => {
  test('should render correctly', () => {
    render(<WebsiteSignature />).getByTestId('WebsiteSignature')
  })
})
