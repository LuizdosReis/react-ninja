import React from 'react'

const Button = ({ children, handleClick }) => (
  <button onClick={handleClick}>
    {children}
  </button>
)

Button.propTypes = {
  handleClick: React.PropTypes.func.isRequired,
  children: React.PropTypes.node.isRequired
}

export default Button
