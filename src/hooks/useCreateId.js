import { useRef } from 'react'
import shortid from 'shortid'

const useCreateId = () => useRef(`i${shortid.generate()}`)

export default useCreateId
