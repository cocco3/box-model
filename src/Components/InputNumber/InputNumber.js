import React from "react"
import PropTypes from 'prop-types'

function InputNumber({
  label,
  max,
  min,
  name,
  onChange,
  value
}) {

  return (
    <>
      <label>{label}</label>
      <input
        max={max}
        min={min}
        name={name}
        onChange={onChange}
        type="number"
        value={value}
      />
    </>
  )
}

InputNumber.propTypes = {
  label: PropTypes.string,
  max: PropTypes.number,
  min: PropTypes.number,
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string
}

export default InputNumber
