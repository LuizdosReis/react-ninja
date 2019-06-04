import React from 'react'

const Title = ({ title }) => (
  <h1>{title}</h1>
)

Title.defaultProps = {
  title: 'Desconhecido'
}

export default Title
