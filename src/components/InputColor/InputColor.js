import React from 'react'
import PropTypes from 'prop-types'

/** @jsx jsx */
import { jsx } from '@emotion/core'
import css from '@emotion/css/macro'

import { useCreateId } from '../../hooks'

function InputColor({
  label,
  name,
  onChange,
  value
}) {
  const id = useCreateId()

  return (
    <React.Fragment>
      <label htmlFor={id.current}>{label}</label>
      <input
        id={id.current}
        name={name}
        onChange={onChange}
        type="color"
        value={value}
      />
    </React.Fragment>
  )
}

InputColor.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string
}

export default InputColor
