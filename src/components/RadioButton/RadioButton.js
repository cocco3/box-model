import React from 'react'
import PropTypes from 'prop-types'

/** @jsx jsx */
import { jsx } from '@emotion/core'
import css from '@emotion/css/macro' // eslint-disable-line no-unused-vars

import { useCreateId } from '../../hooks'

import styles from './styles'

function InputText({
  label,
  name,
  onChange,
  value
}) {
  const id = useCreateId()

  return (
    <React.Fragment>
      <input
        css={styles.input}
        id={id.current}
        name={name}
        onChange={onChange}
        type="radio"
        value={value}
      />
      <label htmlFor={id.current}>
        {label}
      </label>
    </React.Fragment>
  )
}

InputText.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string
}

export default InputText
