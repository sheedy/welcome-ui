import React, { useState } from 'react'
import { func, object } from 'prop-types'

import { DoczCodeBlock } from './CodeBlock'

export const DoczForm = ({ children, initialValues }) => {
  const [values, setValues] = useState(initialValues)
  const handleChange = (value, name) => {
    setValues({
      ...values,
      [name]: value
    })
  }

  return (
    <form>
      {children(values, handleChange)}
      <DoczCodeBlock>{values}</DoczCodeBlock>
    </form>
  )
}

DoczForm.propTypes = {
  children: func,
  initialValues: object
}