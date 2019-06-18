// 'strict'

'use strict'

import React, { Component } from 'react'
import Button from './Button'

class App extends Component {
  constructor () {
    super()
    this.state = {
      showTimer: true
    }
  }

  render () {
    const {
      showTimer
    } = this.state

    return (
      <div>
        <Button
          handleClick={() => { this.setState((prevState) => ({ showTimer: !prevState.showTimer })) }}
        >
          {showTimer ? 'Hide' : 'Show'} Timer
        </Button>
        <Button
          handleClick={() => { this.setState(() => ({ timer: 0 })) }}
        >
          Clear Timer
        </Button>
      </div>
    )
  }
}

export default App
