import React, { useState } from 'react'
import Input from './Input'
import Checkbox from './Checkbox'

const Form = () => {
  const [value, setValue] = useState('Start value')
  const [checked, setChecked] = useState(false)

  return (
    <div>
      <Input
        value={value}
        onChange={(e) => { setValue(e.target.value) }}
      />
      <Checkbox
        checked={checked}
        onChange={() => { setChecked(!checked) }}
      />
    </div>
  )
}

export default Form
