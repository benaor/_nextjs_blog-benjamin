import { render } from '@testing-library/react'
import Citation from '.'

describe('Citation', () => {
  test('should render Citation correctly', () => {
    render(<Citation author="test">Citation</Citation>).getByTestId('Citation')
  })
  test('should render text in citation correctly', () => {
    render(<Citation>Citation</Citation>).getByText('Citation')
  })
  test('should render author correctly', () => {
    render(<Citation author="Testeur">Citation</Citation>).getByTestId('Testeur')
  })
  test('should render author correctly if isnt defined', () => {
    render(<Citation>Citation</Citation>).getByTestId('Artiste inconnu')
  })
})
