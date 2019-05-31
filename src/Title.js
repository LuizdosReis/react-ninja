import React from 'react'

const Title = React.createClass({

  getDefaultProps: function () {
    return {
      title: 'Desconhecido'
    }
  },
  render: function () {
    return (
      <h1>{this.props.title}</h1>
    )
  }
})

export default Title
