import React from 'react'
import PropTypes from 'prop-types'

const Textarea = ({ value, onChange }) => (
  <textarea
    value={value}
    onChange={onChange}
  />
)

Textarea.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
}

export default Textarea
