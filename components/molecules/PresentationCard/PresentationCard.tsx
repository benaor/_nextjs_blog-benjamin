import Image from 'next/image'
import * as React from 'react'
import { Colors } from '../../../styles/Colors.enum'
import { PropType } from './PresentationCard.types'

const PresentationCard: React.FunctionComponent<PropType> = ({
  imgSrc,
  title,
  imgWidth = 50,
  imgHeigth = 50,
  children
}: PropType) => {
  const divStyles: React.CSSProperties = {
    width: '30%',
    textAlign: 'center',
    fontSize: '18px'
  }

  return (
    <div style={divStyles}>
      <Image src={String(imgSrc)} width={imgWidth} height={imgHeigth} />
      <h3 style={{ fontSize: '44px', fontWeight: 'bold', color: Colors.ORANGE }}>{title}</h3>
      <p style={{ lineHeight: '1.65' }}>{children}</p>
    </div>
  )
}

export default PresentationCard
