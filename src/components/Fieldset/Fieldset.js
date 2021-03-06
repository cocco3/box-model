import React from 'react' // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types'

/** @jsx jsx */
import { jsx } from '@emotion/core'
import css from '@emotion/css/macro' // eslint-disable-line no-unused-vars

import styles from './styles'

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
    <fieldset css={styles.fieldset}>
      {LegendNode}
      <div css={styles.grid}>
        {children}
      </div>
    </fieldset>
  )
}

Fieldset.propTypes = {
  legend: PropTypes.string
}

export default Fieldset
