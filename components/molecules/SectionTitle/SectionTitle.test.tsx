import { render } from '@testing-library/react'
import SectionTitle from '.'

describe('SectionTitle', () => {
  test('Should render correctly', () => {
    render(<SectionTitle title="TestTitle" />).getByText('TestTitle')
  })
})
