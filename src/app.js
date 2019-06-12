// 'strict'

'use strict'

import React, { Component } from 'react'
import Title from './Title'
import Square from './Square'
import LikeButton from './LikeButton'
import SearchButton from './SearchButton'

class App extends Component {
  constructor () {
    super()
    this.state = {
      title: 'Title in state'
    }
  }

  render () {
    const { title } = this.state

    return (
      <div>
        <Title title={title} />
        {
          ['green', 'blue', 'black'].map(color => (
            <Square key={color} color={color} ><p>Using children</p></Square>
          ))
        }
        <Square />
        <LikeButton />
        <SearchButton />
      </div>
    )
  }
}

export default App
