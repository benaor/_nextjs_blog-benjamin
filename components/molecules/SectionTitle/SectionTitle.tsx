import * as React from 'react'
import { PropType } from './SectionTitle.types'

const SectionTitle: React.FunctionComponent<PropType> = ({ title, style }: PropType) => {
  const titleStyles: React.CSSProperties = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: 'Abhaya_Libre',
    fontSize: '72px',
    fontWeight: '600',
    ...style
  }

  return (
    <div style={titleStyles}>
      <h2>{title}</h2>
      <hr style={{ border: '2px solid', width: '40%' }} />
    </div>
  )
}

export default SectionTitle
