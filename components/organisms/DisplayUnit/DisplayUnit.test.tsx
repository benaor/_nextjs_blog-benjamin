import { render } from '@testing-library/react'
import DisplayUnit from '.'
import { PropType } from './DisplayUnit.types'

const props: PropType = {
  title: 'TestTitle',
  backgroundImage: '/img/header-blog.jpg',
  color: 'red',
  children: <p data-testid="children">TestChildren</p>
}

describe('DisplayUnit', () => {
  test('Should render correctly', () => {
    render(<DisplayUnit {...props}>{props.children}</DisplayUnit>).getByText('TestChildren')
  })
  test('Should contain children', () => {
    const wrapper = render(<DisplayUnit {...props}>{props.children}</DisplayUnit>)
    wrapper.getByTestId('children')
  })
})
