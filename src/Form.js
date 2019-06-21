import React, { useState } from 'react'
import Input from './Input'
import Checkbox from './Checkbox'
import Radio from './Radio'
import Select from './Select'
import Textarea from './Textarea'

const Form = () => {
  const [value, setValue] = useState('Start value')
  const [checked, setChecked] = useState(false)
  const [firstRadiochecked, setFirstRadioChecked] = useState(true)
  const [secondRadiochecked, setSecondRadioChecked] = useState(false)
  const [selectValue, setSelectValue] = useState('One')
  const [textAreaValue, setTextAreaValue] = useState('')

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
      <Select
        value={selectValue}
        onChange={(e) => { setSelectValue(e.target.value) }}
        options={[
          {
            label: 'one',
            value: '1'
          },
          {
            label: 'two',
            value: 2
          },
          {
            label: 'three',
            value: '3'
          }
        ]}
      />
      <Textarea
        value={textAreaValue}
        onChange={(e) => { setTextAreaValue(e.target.value) }}
      />
    </div>
  )
}

export default Form
