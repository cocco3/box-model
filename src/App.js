import React from 'react' // eslint-disable-line no-unused-vars
import './App.css'

/** @jsx jsx */
import { jsx } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'

import {
  Box,
  Fieldset,
  InputColor, 
  InputNumber,
  InputText,
  RadioButton
} from './components'

import { useInputChange } from './hooks'

const theme = {
  colors: {}
}

function App() {

  const initialState = {
    marginTop: '8',
    marginRight: '8',
    marginBottom: '8',
    marginLeft: '8',
    marginColor: '#ffabab',

    borderTop: '12',
    borderRight: '12',
    borderBottom: '12',
    borderLeft: '12',
    borderColor: '#ffde8e',

    paddingTop: '16',
    paddingRight: '16',
    paddingBottom: '16',
    paddingLeft: '16',
    paddingColor: '#c9ff81',

    minHeight: '0',
    height: '',
    maxHeight: '',

    minWidth: '0',
    width: '',
    maxWidth: '',

    fontSize: '16',
    lineHeight: '24',

    outline: '',
    outlineOffset: '',
    outlineColor: '#1a04d0',

    text: 'Hello world!'
  }

  const [inputs, handleInputChange] = useInputChange(initialState)

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <div className="box">
          <Box
            borderTop={parseInt(inputs.borderTop)}
            borderRight={parseInt(inputs.borderRight)}
            borderBottom={parseInt(inputs.borderBottom)}
            borderLeft={parseInt(inputs.borderLeft)}
            borderColor={inputs.borderColor}

            marginTop={parseInt(inputs.marginTop)}
            marginRight={parseInt(inputs.marginRight)}
            marginBottom={parseInt(inputs.marginBottom)}
            marginLeft={parseInt(inputs.marginLeft)}
            marginColor={inputs.marginColor}

            paddingTop={parseInt(inputs.paddingTop)}
            paddingRight={parseInt(inputs.paddingRight)}
            paddingBottom={parseInt(inputs.paddingBottom)}
            paddingLeft={parseInt(inputs.paddingLeft)}
            paddingColor={inputs.paddingColor}

            minHeight={parseInt(inputs.minHeight)}
            height={parseInt(inputs.height)}
            maxHeight={parseInt(inputs.maxHeight)}

            minWidth={parseInt(inputs.minWidth)}
            width={parseInt(inputs.width)}
            maxWidth={parseInt(inputs.maxWidth)}

            fontSize={parseInt(inputs.fontSize)}
            lineHeight={parseInt(inputs.lineHeight)}

            outline={parseInt(inputs.outline)}
            outlineOffset={parseInt(inputs.outlineOffset)}
            outlineColor={inputs.outlineColor}

            text={inputs.text}
          />
        </div>
        
        <div className="controls">

          <Fieldset legend="Margin">
            <InputNumber
              label="margin-top"
              min={0}
              name="marginTop"
              onChange={handleInputChange}
              value={inputs.marginTop}
            />
            <InputNumber
              label="margin-right"
              min={0}
              name="marginRight"
              onChange={handleInputChange}
              value={inputs.marginRight}
            />
            <InputNumber
              label="margin-bottom"
              min={0}
              name="marginBottom"
              onChange={handleInputChange}
              value={inputs.marginBottom}
            />
            <InputNumber
              label="margin-left"
              min={0}
              name="marginLeft"
              onChange={handleInputChange}
              value={inputs.marginLeft}
            />
            <InputColor
              label="margin color"
              name="marginColor"
              onChange={handleInputChange}
              value={inputs.marginColor}
            />
          </Fieldset>

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
            <InputColor
              label="border-color"
              name="borderColor"
              onChange={handleInputChange}
              value={inputs.borderColor}
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
            <InputColor
              label="padding color"
              name="paddingColor"
              onChange={handleInputChange}
              value={inputs.paddingColor}
            />
          </Fieldset>

          <Fieldset legend="Height">
            <InputNumber
              label="min-height"
              min={0}
              name="minHeight"
              onChange={handleInputChange}
              value={inputs.minHeight}
            />
            <InputNumber
              label="height"
              min={0}
              name="height"
              onChange={handleInputChange}
              value={inputs.height}
            />
            <InputNumber
              label="max-height"
              min={0}
              name="maxHeight"
              onChange={handleInputChange}
              value={inputs.maxHeight}
            />
          </Fieldset>

          <Fieldset legend="Width">
            <InputNumber
              label="min-width"
              min={0}
              name="minWidth"
              onChange={handleInputChange}
              value={inputs.minWidth}
            />
            <InputNumber
              label="width"
              min={0}
              name="width"
              onChange={handleInputChange}
              value={inputs.width}
            />
            <InputNumber
              label="max-width"
              min={0}
              name="maxWidth"
              onChange={handleInputChange}
              value={inputs.maxWidth}
            />
          </Fieldset>
          <Fieldset legend="Font">
            <InputNumber
              label="font-size"
              min={0}
              name="fontSize"
              onChange={handleInputChange}
              value={inputs.fontSize}
            />
            <InputNumber
              label="line-height"
              min={0}
              name="lineHeight"
              onChange={handleInputChange}
              value={inputs.lineHeight}
            />
            <InputText
              label="text"
              name="text"
              onChange={handleInputChange}
              value={inputs.text}
            />
          </Fieldset>
          <Fieldset legend="Outline">
            <InputNumber
              label="outline"
              min={0}
              name="outline"
              onChange={handleInputChange}
              value={inputs.outline}
            />
            <InputNumber
              label="outline-offset"
              name="outlineOffset"
              onChange={handleInputChange}
              value={inputs.outlineOffset}
            />
            <InputColor
              label="outline-color"
              name="outlineColor"
              onChange={handleInputChange}
              value={inputs.outlineColor}
            />
          </Fieldset>

          {false && (
            <Fieldset legend="Units">
              <RadioButton
                label="px"
                name="units"
              />
              <RadioButton
                label="rem"
                name="units"
              />
            </Fieldset>
          )}
        </div>

      </div>
    </ThemeProvider>
  )
}

export default App
