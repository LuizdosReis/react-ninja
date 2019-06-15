import React, { Component } from 'react'

class Timer extends Component {
  constructor () {
    super()
    this.state = {
      timer: 0
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
      this.setState((prevState) => ({ timer: prevState.timer + 1 }))
    }, 1000)
  }

  componentWillUnmount () {
    console.log('component will unmount')
    clearInterval(this.timer)
  }

  componentWillReceiveProps (nextProps) {
    console.log('component will receive props', this.props, nextProps)
    this.setState(() => ({ timer: nextProps.timer }))
  }

  shouldComponentUpdate (nextProps, nextState) {
    console.log('should component update props', this.props, nextProps)
    console.log('should component update state', this.state, nextState)
    return nextProps !== nextState
  }

  componentWillUpdate (nextProps, nextState) {
    console.log('component will update props', this.props, nextProps)
    console.log('component will update state', this.state, nextState)
  }

  componentDidUpdate (prevProps, prevState) {
    console.log('component did update props', this.props, prevProps)
    console.log('component did update state', this.state, prevState)
  }

  render () {
    console.log('render')
    return <div> Timer: {this.state.timer}</div>
  }
}

export default Timer
