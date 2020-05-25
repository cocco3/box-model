import { useTheme } from 'emotion-theming'

const useThemeStyles = (styles) => styles(useTheme())

export default useThemeStyles
