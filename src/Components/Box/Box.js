import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'

/** @jsx jsx */
import { jsx } from '@emotion/core'
import css from '@emotion/css/macro'

import useThemeStyles from '../../useThemeStyles'

import baseStyles from './styles'

function Box({
  borderTop,
  borderRight,
  borderBottom,
  borderLeft,

  marginTop,
  marginRight,
  marginBottom,
  marginLeft,

  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,

  lineHeight,
  minHeight,
  height,

  text
}) {

  const styles = useThemeStyles(baseStyles)

  const BoxRef = useRef(null)
  const [offsetHeight, setOffsetHeight] = useState(null)

  useEffect(() => {
    if (BoxRef) {
      setOffsetHeight(BoxRef.current.offsetHeight)
    }
  }, [
    borderTop,
    borderBottom,
    paddingTop,
    paddingBottom,
    lineHeight,
    minHeight,
    height,
    setOffsetHeight
  ])

  const inlineStylesInner = {
    ...borderTop && { borderTopWidth: borderTop },
    ...borderRight && { borderRightWidth: borderRight },
    ...borderBottom && { borderBottomWidth: borderBottom },
    ...borderLeft && { borderLeftWidth: borderLeft },
    
    ...marginTop && { marginTop },
    ...marginRight && { marginRight },
    ...marginBottom && { marginBottom },
    ...marginLeft && { marginLeft },

    ...paddingTop && { paddingTop },
    ...paddingRight && { paddingRight },
    ...paddingBottom && { paddingBottom },
    ...paddingLeft && { paddingLeft },

    ...minHeight && { minHeight },
    ...height && { height },
  }

  const HeightNode = (
    <div
      css={styles.height}
      style={{
        ...marginBottom && { marginBottom },
        ...marginTop && { marginTop }
      }}
    >
      <span>{`${offsetHeight}px`}</span>
    </div>
  )

  return (
    <div style={{ display: 'flex', flexDirection: 'row', position: 'relative' }}>
      <div css={styles.outer}>
        <div
          ref={BoxRef}
          css={styles.inner}
          style={inlineStylesInner}
        >
          <div
            css={styles.content}
            style={{ lineHeight: `${lineHeight}px` }}
          >
            {text}
          </div>
        </div>
      </div>
      {HeightNode}
    </div>
  )
}

Box.propTypes = {
  borderTop: PropTypes.number,
  borderRight: PropTypes.number,
  borderBottom: PropTypes.number,
  borderLeft: PropTypes.number,

  marginTop: PropTypes.number,
  marginRight: PropTypes.number,
  marginBottom: PropTypes.number,
  marginLeft: PropTypes.number,

  paddingTop: PropTypes.number,
  paddingRight: PropTypes.number,
  paddingBottom: PropTypes.number,
  paddingLeft: PropTypes.number,

  minHeight: PropTypes.number,
  height: PropTypes.number,
  lineHeight: PropTypes.number,

  text: PropTypes.string
}

Box.defaultProps = {
  borderTop: 0,
  borderRight: 0,
  borderBottom: 0,
  borderLeft: 0,

  marginTop: 0,
  marginRight: 0,
  marginBottom: 0,
  marginLeft: 0,

  paddingTop: 0,
  paddingRight: 0,
  paddingBottom: 0,
  paddingLeft: 0,

  lineHeight: 0,
  minHeight: 0,
  height: null,

  text: 'Hello world'
}

export default Box
