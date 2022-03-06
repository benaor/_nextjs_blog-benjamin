import React, { CSSProperties } from 'react'
import { PropType } from './ItemToScroll.types'

const ItemToScroll: React.FunctionComponent<PropType> = ({ text }: PropType) => {
  const styles: CSSProperties = {
    padding: '10px 50px',
    textTransform: 'uppercase'
  }

  return (
    <span data-testid="ItemToScroll" style={styles}>
      {text}
    </span>
  )
}
export default ItemToScroll
