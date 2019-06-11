// 'strict'

import React, { Component } from 'react'
import Title from './Title'
import Square from './Square'
import LikeButton from './LikeButton'
import SearchButton from './SearchButton'

class App extends Component {
  render () {
    return (
      <div>
        <Title />
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
