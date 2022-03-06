import * as React from 'react'
import { PropType } from './Citation.types'

const Citation: React.FunctionComponent<PropType> = ({
  children,
  author = 'Artiste inconnu',
  style
}: PropType) => {
  const styles: React.CSSProperties = {
    width: '40%',
    padding: '30px 0',
    margin: 'auto',
    textAlign: 'center',
    fontFamily: 'Abhaya-libre',
    lineHeight: '1.7',
    ...style
  }

  return (
    <div data-testid="Citation" style={styles}>
      <p>{children}</p>
      <p data-testid={author}>- {author} -</p>
    </div>
  )
}

export default Citation
