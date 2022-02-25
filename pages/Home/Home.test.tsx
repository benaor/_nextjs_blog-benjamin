import React from 'react'
import { render } from '@testing-library/react'
import Home from '..'

describe('Home', () => {
  test('should render Home component correctly', () => {
    render(<Home />).getByTestId('Home')
  })
})
