import React, { Component } from 'react'
import Input from './Input'

class Form extends Component {
  constructor () {
    super()
    this.state = {
      value: 'Start value'
    }
  }

  render () {
    return (
      <Input
        value={this.state.value}
        onChange={(e) => { this.setState({ value: e.target.value }) }}
      />
    )
  }
}

export default Form
