import React from 'react'

const Input = ({ value, onChange }) => (
  <input
    type='text'
    value={value}
    onChange={onChange}
  />
)

Input.propTypes = {
  onChange: React.PropTypes.func.isRequired,
  value: React.PropTypes.string.isRequired
}

export default Input
