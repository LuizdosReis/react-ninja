import React from 'react'
import Button from './Button'

const LikeButton = () => (
  <Button handleClick={() => console.log('like button')} >
    Like Button
  </Button>
)

export default LikeButton
