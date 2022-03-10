import { render } from '@testing-library/react'
import PresentationCard from '.'
import { PropType } from './PresentationCard.types'

const props: PropType = {
  imgSrc: '😀',
  title: 'TestTitle',
  children: <>description</>
}

describe('PresentationCard', () => {
  test('should render correctly', () => {
    const wrapper = render(
      <PresentationCard title={props.title} imgSrc={props.imgSrc}>
        {props.children}
      </PresentationCard>
    )
    wrapper.getByText('description')
  })
})
