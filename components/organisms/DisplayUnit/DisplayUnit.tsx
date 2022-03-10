import * as React from 'react'
import SectionTitle from '../../molecules/SectionTitle'
import { PropType } from './DisplayUnit.types'

const DisplayUnit: React.FunctionComponent<PropType> = ({
  style,
  title,
  backgroundImage,
  color,
  children
}: PropType) => {
  const sectionStyles: React.CSSProperties = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    height: '100vh',
    color
  }

  const containerStyles: React.CSSProperties = {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    margin: 'auto',
    ...style
  }

  const displayerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: '10%'
  }

  return (
    <section data-testid="DisplayUnit" style={sectionStyles}>
      <div className="" style={containerStyles}>
        <SectionTitle title={title} />
        <div style={displayerStyle}>{children}</div>
      </div>
    </section>
  )
}

export default DisplayUnit
