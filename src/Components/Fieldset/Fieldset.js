import React from "react"
import PropTypes from 'prop-types'

function Fieldset({
  children,
  legend
}) {

  const LegendNode = legend && (
    <legend>
      {legend}
    </legend>
  )

  return (
    <fieldset>
      {LegendNode}
      {children}
    </fieldset>
  )
}

Fieldset.propTypes = {
  legend: PropTypes.string
}

export default Fieldset
