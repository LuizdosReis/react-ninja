import React from 'react'
import PropTypes from 'prop-types'

const Radio = ({ checked, onChange, name }) => (
  <input
    type='radio'
    name={name}
    checked={checked}
    onChange={onChange}
  />

)

Radio.propTypes = {
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired
}

export default Radio
