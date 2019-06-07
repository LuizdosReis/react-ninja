// 'strict'

import React, { Component } from 'react'
import Title from './Title'
import Square from './Square'

class App extends Component {
  render () {
    return (
      <div>
        <Title />
        {
          ['green', 'blue', 'black'].map(color => (
            <Square key={color} color={color} />
          ))
        }
        <Square />
      </div>
    )
  }
}

export default App
