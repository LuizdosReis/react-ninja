import React, { Component } from 'react'
import Input from './Input'
import Checkbox from './Checkbox'

class Form extends Component {
  constructor () {
    super()
    this.state = {
      value: 'Start value',
      checked: false
    }
  }

  render () {
    return (
      <div>
        <Input
          value={this.state.value}
          onChange={(e) => { this.setState({ value: e.target.value }) }}
        />
        <Checkbox
          checked={this.state.checked}
          onChange={() => { this.setState((prevState) => ({ checked: !prevState.checked })) }}
        />
      </div>
    )
  }
}

export default Form
