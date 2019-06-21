import React from 'react'
import PropTypes from 'prop-types'

const Input = ({ value, onChange }) => (
  <input
    type='text'
    value={value}
    onChange={onChange}
  />
)

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
}

export default Input
