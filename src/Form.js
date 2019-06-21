import React, { useState } from 'react'
import Input from './Input'
import Checkbox from './Checkbox'
import Radio from './Radio'

const Form = () => {
  const [value, setValue] = useState('Start value')
  const [checked, setChecked] = useState(false)
  const [firstRadiochecked, setFirstRadioChecked] = useState(true)
  const [secondRadiochecked, setSecondRadioChecked] = useState(false)

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
      <Radio
        checked={firstRadiochecked}
        name='rd'
        onChange={() => { setFirstRadioChecked(!firstRadiochecked) }}
      />
      <Radio
        checked={secondRadiochecked}
        name='rd'
        onChange={() => { setSecondRadioChecked(!secondRadiochecked) }}
      />
    </div>
  )
}

export default Form
