import * as React from 'react'
import { render } from '@testing-library/react'
import HomePage from './index'

describe('index', () => {
  test('should render index correctly', () => {
    render(<HomePage />).getByTestId('Index')
  })
})
