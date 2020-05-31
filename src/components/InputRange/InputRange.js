import React from 'react'
import PropTypes from 'prop-types'

function InputRange({
  label,
  max,
  min,
  onChange,
  step,
  value
}) {

  return (
    <>
      <label>{label}</label>
      <input
        max={max}
        min={min}
        onChange={onChange}
        step={step}
        type="range"
        value={value}
      />
    </>
  )
}

InputRange.propTypes = {
  label: PropTypes.string,
  max: PropTypes.number,
  min: PropTypes.number,
  onChange: PropTypes.func,
  step: PropTypes.number,
  value: PropTypes.number
}

InputRange.defaultProps = {
  min: 0,
  max: 100,
  step: 1
}

export default InputRange
