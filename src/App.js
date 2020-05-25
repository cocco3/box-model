import React from 'react'
import './App.css'

import { Box, Fieldset, InputNumber } from './Components'
import useInputChange from './useInputChange'

function App() {

  const initialState = {
    borderTop: '8',
    borderRight: '8',
    borderBottom: '8',
    borderLeft: '8',
    paddingTop: '8',
    paddingRight: '8',
    paddingBottom: '8',
    paddingLeft: '8'
  }

  const [inputs, handleInputChange] = useInputChange(initialState)

  return (
    <div className="App">
      <div className="controls">
        <Fieldset legend="Border">
          <InputNumber
            label="border-top"
            min={0}
            name="borderTop"
            onChange={handleInputChange}
            value={inputs.borderTop}
          />
          <InputNumber
            label="border-right"
            min={0}
            name="borderRight"
            onChange={handleInputChange}
            value={inputs.borderRight}
          />
          <InputNumber
            label="border-bottom"
            min={0}
            name="borderBottom"
            onChange={handleInputChange}
            value={inputs.borderBottom}
          />
          <InputNumber
            label="border-left"
            min={0}
            name="borderLeft"
            onChange={handleInputChange}
            value={inputs.borderLeft}
          />
        </Fieldset>

        <Fieldset legend="Padding">
          <InputNumber
            label="padding-top"
            min={0}
            name="paddingTop"
            onChange={handleInputChange}
            value={inputs.paddingTop}
          />
          <InputNumber
            label="padding-right"
            min={0}
            name="paddingRight"
            onChange={handleInputChange}
            value={inputs.paddingRight}
          />
          <InputNumber
            label="padding-bottom"
            min={0}
            name="paddingBottom"
            onChange={handleInputChange}
            value={inputs.paddingBottom}
          />
          <InputNumber
            label="padding-left"
            min={0}
            name="paddingLeft"
            onChange={handleInputChange}
            value={inputs.paddingLeft}
          />
        </Fieldset>
      </div>
      <div className="output">
        <Box
          borderTop={parseInt(inputs.borderTop)}
          borderRight={parseInt(inputs.borderRight)}
          borderBottom={parseInt(inputs.borderBottom)}
          borderLeft={parseInt(inputs.borderLeft)}
          paddingTop={parseInt(inputs.paddingTop)}
          paddingRight={parseInt(inputs.paddingRight)}
          paddingBottom={parseInt(inputs.paddingBottom)}
          paddingLeft={parseInt(inputs.paddingLeft)}
        />
      </div>
    </div>
  )
}

export default App
