import React from 'react'
import PropTypes from 'prop-types'

/** @jsx jsx */
import { jsx } from '@emotion/core'
import css from '@emotion/css/macro'

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
      <label htmlFor={id.current}>{label}</label>
      <input
        css={styles.input}
        id={id.current}
        name={name}
        onChange={onChange}
        type="text"
        value={value}
      />
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
