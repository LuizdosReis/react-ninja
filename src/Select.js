import React from 'react'
import PropTypes from 'prop-types'

const Select = ({ options, onChange, value }) => (
  <select
    value={value}
    onChange={onChange}
  >
    {
      options.map(option =>
        <option key={option.value} value={option.value}>{option.label}</option>
      )
    }
  </select>

)

Select.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
      ]),
      label: PropTypes.string.isRequired
    })
  ).isRequired
}

export default Select
