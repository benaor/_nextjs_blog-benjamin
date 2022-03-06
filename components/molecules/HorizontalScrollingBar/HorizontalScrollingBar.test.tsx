import { render } from '@testing-library/react'
import HorizontalScrollingBar from '.'
import { PropType } from './HorizontalScrollingBar.types'

const props: PropType = { itemsToScroll: ['test1', 'test2'] }

describe('HorizontalScrollingBar', () => {
  test('should render correctly navigation', () => {
    render(<HorizontalScrollingBar itemsToScroll={props.itemsToScroll} />).getByTestId(
      'HorizontalScrollingBar'
    )
  })
})
