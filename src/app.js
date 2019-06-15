// 'strict'

'use strict'

import React, { Component } from 'react'
import Title from './Title'
import Square from './Square'
import Button from './Button'

class App extends Component {
  constructor () {
    super()
    this.state = {
      title: 'Title in state',
      color: 'red'
    }
  }

  render () {
    const { title } = this.state

    return (
      <div>
        <Title title={title} />
        <Square color={this.state.color} />
        <Button handleClick={() => { this.setState({ title: 'new Title' }) }}>change title</Button>
        {
          ['green', 'blue', 'black'].map(color => (
            <Button
              key={color}
              handleClick={() => { this.setState({ color }) }}
            >
              <p>{color}</p>
            </Button>
          ))
        }
      </div>
    )
  }
}

export default App
