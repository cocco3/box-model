import React from 'react'
import PropTypes from 'prop-types'

/** @jsx jsx */
import { jsx } from '@emotion/core'
import css from '@emotion/css/macro'

import { useCreateId } from '../../hooks'

import styles from './styles'

function InputNumber({
  label,
  max,
  min,
  name,
  onChange,
  value
}) {
  const id = useCreateId()

  return (
    <React.Fragment>
      <label htmlFor={id.current}>{label}</label>
      <input
        css={styles.input}
        id={id.current}
        inputMode="numeric"
        max={max}
        min={min}
        name={name}
        onChange={onChange}
        type="number"
        value={value}
      />
    </React.Fragment>
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
