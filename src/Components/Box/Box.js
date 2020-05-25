import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'

/** @jsx jsx */
import { jsx } from '@emotion/core'
import css from '@emotion/css/macro'

import styles from './styles'

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

  minHeight,

  text
}) {

  const BoxRef = useRef(null)
  const [height, setHeight] = useState(null)

  useEffect(() => {
    if (BoxRef) {
      setHeight(BoxRef.current.offsetHeight)
    }
  }, [
    borderTop,
    borderBottom,
    paddingTop,
    paddingBottom,
    minHeight,
    setHeight
  ])

  const inlineStylesOuter = {
    padding: `${marginTop}px ${marginRight}px ${marginBottom}px ${marginLeft}px`
  }

  const inlineStylesInner = {
    borderWidth: `${borderTop}px ${borderRight}px ${borderBottom}px ${borderLeft}px`,
    minHeight: `${minHeight}px`,
    padding: `${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px`
  }

  const HeightNode = (
    <div
      css={styles.height}
      style={{
        marginBottom: marginBottom,
        marginTop: marginTop
      }}
    >
      <span>{`${height}px`}</span>
    </div>
  )

  return (
    <div style={{ display: 'flex', flexDirection: 'row', position: 'relative' }}>
      <div
        css={styles.outer}
        style={inlineStylesOuter}
      >
        <div
          ref={BoxRef}
          css={styles.inner}
          style={inlineStylesInner}
        >
          <div css={styles.content}>
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

  minHeight: 0,

  text: 'Hello world'
}

export default Box
