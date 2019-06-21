import React from 'react'
import PropTypes from 'prop-types'

const Checkbox = ({ checked, onChange }) => (
  <input
    type='checkbox'
    checked={checked}
    onChange={onChange}
  />

)

Checkbox.propTypes = {
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired
}

export default Checkbox
