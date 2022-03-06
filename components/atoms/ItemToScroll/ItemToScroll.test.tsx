import { render } from '@testing-library/react'
import HorizontalScrollingBar from '.'
import { PropType } from './ItemToScroll.types'

const props: PropType = { text: 'test' }

describe('ItemToScroll', () => {
  test('should render correctly ItemToScroll', () => {
    render(<HorizontalScrollingBar {...props} />).getByTestId('ItemToScroll')
  })
})
