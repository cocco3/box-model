import React from 'react'
import PropTypes from 'prop-types'

/** @jsx jsx */
import { jsx } from '@emotion/core'
import css from '@emotion/css/macro' // eslint-disable-line no-unused-vars

function Checkbox({
  checked,
  label,
  name,
  onChange,
  value
}) {

  return (
    <React.Fragment>
      <input
        checked={checked}
        name={name}
        onChange={onChange}
        type="checkbox"
        value={value}
      />
      <label>{label}</label>
    </React.Fragment>
  )
}

Checkbox.propTypes = {
  checked: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string
}

export default Checkbox
