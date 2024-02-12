import { createContext, useState, useEffect } from 'react'
import { darkThemeColors, lightThemeColors } from '../common/theme'

export const DarkModeContext = createContext()

export const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true)

  useEffect(() => {
    const theme = localStorage.getItem('theme')
    setIsDarkMode(theme === 'dark')
  }, [])

  const toggleDarkMode = () => {
    const newMode = !isDarkMode
    setIsDarkMode(newMode)
    localStorage.setItem('theme', newMode ? 'dark' : 'light')
  }

  const theme = isDarkMode ? darkThemeColors : lightThemeColors

  return (
    <DarkModeContext.Provider value={{ isDarkMode, theme, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  )
}