import { useState, useCallback } from 'react'

export const useInputChange = (initial = {}) => {
  const [inputs, setInput] = useState(initial)

  const handleInputChange = useCallback(
    event => {
      setInput({
          ...inputs,
          [event.currentTarget.name]: event.currentTarget.value
        })
    },
    [inputs, setInput]
  )

  return [inputs, handleInputChange]
}

export default useInputChange
