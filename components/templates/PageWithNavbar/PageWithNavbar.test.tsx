import { render } from '@testing-library/react'
import * as React from 'react'
import PageWithNavbar from '.'

describe('PageWithNavbar', () => {
  test('Should render PageWithNavbar correctly', () => {
    render(<PageWithNavbar />).getByTestId('PageWithNavbar')
  })
})
