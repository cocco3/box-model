import React from "react"
import PropTypes from 'prop-types'

function Box({
  children,
  borderTop,
  borderRight,
  borderBottom,
  borderLeft,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft
}) {

  const inlineStyles = {
    borderWidth: `${borderTop}px ${borderRight}px ${borderBottom}px ${borderLeft}px`,
    padding: `${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px`
  }

  return (
    <div style={inlineStyles}>
      {children}
    </div>
  )
}

Box.propTypes = {
  children: PropTypes.node,
  borderTop: PropTypes.string,
  borderRight: PropTypes.string,
  borderBottom: PropTypes.string,
  borderLeft: PropTypes.string,
  paddingTop: PropTypes.string,
  paddingRight: PropTypes.string,
  paddingBottom: PropTypes.string,
  paddingLeft: PropTypes.string
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
