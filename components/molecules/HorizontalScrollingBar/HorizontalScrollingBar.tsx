import React, { CSSProperties } from 'react'
import ItemToScroll from '../../atoms/ItemToScroll'
import { PropType } from './HorizontalScrollingBar.types'

const HorizontalScrollingBar: React.FunctionComponent<PropType> = ({ itemsToScroll }: PropType) => {
  const styles: CSSProperties = {
    width: '100%',
    whiteSpace: 'nowrap',
    animation: 'marquee linear infinite 20s',
    height: '30px'
  }

  return (
    <div data-testid="HorizontalScrollingBar" style={styles}>
      {itemsToScroll?.map((item: string) => (
        <ItemToScroll key={item} text={item} />
      ))}
    </div>
  )
}
export default HorizontalScrollingBar
