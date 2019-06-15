// 'strict'

'use strict'

import React, { Component } from 'react'
import Timer from './Timer'

class App extends Component {
  constructor () {
    super()
    this.state = {
      showTimer: true
    }
  }

  render () {
    const { showTimer } = this.state
    return (
      <div>
        {
          showTimer && <Timer />
        }
        <button
          onClick={() => { this.setState((prevState) => ({ showTimer: !prevState.showTimer })) }}
        >
          {showTimer ? 'Hide' : 'Show'} Timer
        </button>
      </div>
    )
  }
}

export default App
