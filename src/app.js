'use strict'

import React, { Component } from 'react'
import Form from './Form'

class App extends Component {
  constructor () {
    super()
    this.state = {
      showTimer: true
    }
  }

  render () {
    return (
      <div>
        <Form />
      </div>
    )
  }
}

export default App
