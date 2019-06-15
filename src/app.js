// 'strict'

'use strict'

import React, { Component } from 'react'
import Timer from './Timer'

class App extends Component {
  constructor () {
    super()
    this.state = {
      showTimer: true,
      timer: 0
    }
  }

  render () {
    const {
      showTimer,
      timer
    } = this.state

    return (
      <div>
        {
          showTimer && <Timer timer={timer} />
        }
        <button
          onClick={() => { this.setState((prevState) => ({ showTimer: !prevState.showTimer })) }}
        >
          {showTimer ? 'Hide' : 'Show'} Timer
        </button>
        <button
          onClick={() => { this.setState(() => ({ timer: 0 })) }}
        >
          Clear Timer
        </button>
      </div>
    )
  }
}

export default App
