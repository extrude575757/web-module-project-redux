import { useLocalStorage } from './useLocalStorage'
// Use state transends from the useLocalStorage hook
export const useDarkMode = (key) => {
  const [value, setValue] = useLocalStorage(key, false)
  const toggleDarkMode = () => {
    // Toggle the value
    setValue(!value)
  }
  return [ value, toggleDarkMode]
}