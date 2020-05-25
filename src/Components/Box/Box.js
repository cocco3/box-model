import React from 'react'
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
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft
}) {

  // #region Content Box
  const contentBoxHeight = 32

  const contentBoxStyles = {
    ...styles.box,
    ...styles.boxContent,
    label: 'box-content'
  }

  const ContentBoxNode = (
    <span
      css={contentBoxStyles}
      style={{
        top: `${borderTop + paddingTop + contentBoxHeight}px`,
        right: `${borderRight + paddingRight}px`,
        bottom: `${borderBottom + paddingBottom + contentBoxHeight}px`,
        left: `${borderLeft + paddingLeft}px`
      }}
    >
      Hello world
    </span>
  )

  // #endregion

  const paddingBoxStyles = {
    ...styles.box,
    ...styles.boxPadding,
    label: 'box-padding'
  }

  const PaddingBoxNode = (
    <div
      css={paddingBoxStyles}
      style={{
        top: `${borderTop + paddingTop}px`,
        right: `${borderRight + paddingRight}px`,
        bottom: `${borderBottom + paddingBottom}px`,
        left: `${borderLeft + paddingLeft}px`
      }}
    >
      {ContentBoxNode}
    </div>
  )

  const borderBoxStyles = {
    ...styles.box,
    ...styles.boxBorder,
    label: 'box-border'
  }

  const BorderBoxNode = (
    <div
      css={borderBoxStyles}
      style={{
        top: `${borderTop}px`,
        right: `${borderRight}px`,
        bottom: `${borderBottom}px`,
        left: `${borderLeft}px`
      }}
    >
      {PaddingBoxNode}
    </div>
  )

  const inlineStyles = {
    height: `${borderTop + borderBottom + paddingTop + paddingBottom + contentBoxHeight}px`
  }

  return (
    <div
      css={styles.wrap}
      style={inlineStyles}
    >
      {BorderBoxNode}
    </div>
  )
}

Box.propTypes = {
  borderTop: PropTypes.number,
  borderRight: PropTypes.number,
  borderBottom: PropTypes.number,
  borderLeft: PropTypes.number,
  paddingTop: PropTypes.number,
  paddingRight: PropTypes.number,
  paddingBottom: PropTypes.number,
  paddingLeft: PropTypes.number
}

Box.defaultProps = {
  borderTop: 0,
  borderRight: 0,
  borderBottom: 0,
  borderLeft: 0,
  paddingTop: 0,
  paddingRight: 0,
  paddingBottom: 0,
  paddingLeft: 0
}

export default Box
