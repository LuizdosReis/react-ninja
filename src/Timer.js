import React, { Component } from 'react'

class Timer extends Component {
  constructor () {
    super()
    this.state = {
      time: 0
    }

    this.timer = 0
    console.log('constructor')
  }

  componentWillMount () {
    console.log('component will mount')
  }

  componentDidMount () {
    console.log('component did mount')
    this.timer = setInterval(() => {
      this.setState((prevState) => ({ time: prevState.time + 1 }))
    }, 1000)
  }

  componentWillUnmount () {
    console.log('component will unmount')
    clearInterval(this.timer)
  }

  render () {
    console.log('render')
    return <div> Timer: {this.state.time}</div>
  }
}

export default Timer
