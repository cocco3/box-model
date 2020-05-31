import React, { useEffect, useRef, useState } from 'react' // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types'

/** @jsx jsx */
import { jsx } from '@emotion/core'
import css from '@emotion/css/macro' // eslint-disable-line no-unused-vars

import { useThemeStyles } from '../../hooks'

import baseStyles from './styles'

function Box({
  borderTop,
  borderRight,
  borderBottom,
  borderLeft,
  borderColor,

  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  marginColor,

  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  paddingColor,

  minHeight,
  height,
  maxHeight,

  minWidth,
  width,
  maxWidth,

  fontSize,
  lineHeight,

  outline,
  outlineOffset,
  outlineColor,

  text
}) {

  const styles = useThemeStyles(baseStyles)

  const BoxRef = useRef(null)

  const [offsetHeight, setOffsetHeight] = useState(null)

  useEffect(() => {
    function set() {
      if (BoxRef) {
        setOffsetHeight(BoxRef.current.offsetHeight)
      }
    }
    set()
    window.addEventListener('resize', set)
    return () => window.removeEventListener('resize', set)
  }, [
    borderTop,
    borderBottom,
    paddingTop,
    paddingBottom,
    lineHeight,
    minHeight,
    height,
    maxHeight,
    text,
    setOffsetHeight
  ])

  const [offsetWidth, setOffsetWidth] = useState(null)

  useEffect(() => {
    function set() {
      if (BoxRef) {
        setOffsetWidth(BoxRef.current.offsetWidth)
      }
    }
    set()
    window.addEventListener('resize', set)
    return () => window.removeEventListener('resize', set)
  }, [
    borderLeft,
    borderRight,
    paddingLeft,
    paddingRight,
    minWidth,
    width,
    maxWidth,
    text,
    setOffsetWidth
  ])

  const inlineStylesInner = {
    ...borderTop && { borderTopWidth: borderTop },
    ...borderRight && { borderRightWidth: borderRight },
    ...borderBottom && { borderBottomWidth: borderBottom },
    ...borderLeft && { borderLeftWidth: borderLeft },
    ...borderColor && { borderColor },
    
    ...marginTop && { marginTop },
    ...marginRight && { marginRight },
    ...marginBottom && { marginBottom },
    ...marginLeft && { marginLeft },

    ...paddingTop && { paddingTop },
    ...paddingRight && { paddingRight },
    ...paddingBottom && { paddingBottom },
    ...paddingLeft && { paddingLeft },
    ...paddingColor && { backgroundColor: paddingColor },

    ...minHeight && { minHeight },
    ...height && { height },
    ...maxHeight && { maxHeight },

    ...minWidth && { minWidth },
    ...width && { width },
    ...maxWidth && { maxWidth },

    ...outline && { outlineWidth: outline },
    ...outlineOffset && { outlineOffset },
    ...outlineColor && { outlineColor }
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

  const WidthNode = (
    <div
      css={styles.width}
      style={{
        ...marginLeft && { marginLeft },
        ...marginRight && { marginRight },
        ...offsetHeight && { width: offsetWidth }
      }}
    >
      <span>{`${offsetWidth}px`}</span>
    </div>
  )

  const outerInlineStyles = {
    ...marginColor && { backgroundColor: marginColor }
  }

  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div
          style={outerInlineStyles}
        >
          <div
            ref={BoxRef}
            css={styles.inner}
            style={inlineStylesInner}
          >
            <div
              css={styles.content}
              style={{
              fontSize: `${fontSize}px`,
              lineHeight: `${lineHeight}px`
            }}
            >
              {text}
            </div>
          </div>
        </div>
        {HeightNode}
      </div>
      {WidthNode}
    </div>
  )
}

Box.propTypes = {
  borderTop: PropTypes.number,
  borderRight: PropTypes.number,
  borderBottom: PropTypes.number,
  borderLeft: PropTypes.number,
  borderColor: PropTypes.string,

  marginTop: PropTypes.number,
  marginRight: PropTypes.number,
  marginBottom: PropTypes.number,
  marginLeft: PropTypes.number,
  marginColor: PropTypes.string,

  paddingTop: PropTypes.number,
  paddingRight: PropTypes.number,
  paddingBottom: PropTypes.number,
  paddingLeft: PropTypes.number,
  paddingColor: PropTypes.string,

  minHeight: PropTypes.number,
  height: PropTypes.number,
  maxHeight: PropTypes.number,

  minWidth: PropTypes.number,
  width: PropTypes.number,
  maxWidth: PropTypes.number,

  fontSize: PropTypes.number,
  lineHeight: PropTypes.number,

  outline: PropTypes.number,
  outlineOffset: PropTypes.number,

  text: PropTypes.string
}

Box.defaultProps = {
  borderTop: 0,
  borderRight: 0,
  borderBottom: 0,
  borderLeft: 0,
  borderColor: '#ffde8e',

  marginTop: 0,
  marginRight: 0,
  marginBottom: 0,
  marginLeft: 0,
  marginColor: '#ffabab',

  paddingTop: 0,
  paddingRight: 0,
  paddingBottom: 0,
  paddingLeft: 0,
  paddingColor: '#c9ff81',

  minHeight: 0,
  height: null,
  maxHeight: null,

  minWidth: 0,
  width: null,
  maxWidth: null,

  fontSize: null,
  lineHeight: null,

  outline: null,
  outlineOffset: null,
  outlineColor: '#1a04d0',

  text: null
}

export default Box
