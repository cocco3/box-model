import React from "react"
import "./App.css"

import { Box, Fieldset, InputNumber } from "./Components"
import useInputChange from './useInputChange'

function App() {

  const initialState = {
    borderTop: '0',
    borderRight: '0',
    borderBottom: '0',
    borderLeft: '0',
    paddingTop: '4',
    paddingRight: '8',
    paddingBottom: '4',
    paddingLeft: '8'
  }

  const [inputs, handleInputChange] = useInputChange(initialState)

  return (
    <div className="App">
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

      <Box
        borderTop={inputs.borderTop}
        borderRight={inputs.borderRight}
        borderBottom={inputs.borderBottom}
        borderLeft={inputs.borderLeft}
        paddingTop={inputs.paddingTop}
        paddingRight={inputs.paddingRight}
        paddingBottom={inputs.paddingBottom}
        paddingLeft={inputs.paddingLeft}
      />
    </div>
  )
}

export default App
