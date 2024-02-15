import { useState, useEffect } from 'react'
import { createTheme } from '@mui/material/styles'
import { MaterialUISwitch } from '../ui/MaterialUISwitch'

export const DarkModeSwitch = () => {
  const [isDarkMode, setIsDarkMode] = useState(true)

  const theme = createTheme({ palette: { mode: isDarkMode ? 'dark' : 'light' } })

  useEffect(() => {
    const theme = localStorage.getItem('theme')
    setIsDarkMode(theme === 'dark')
    document.documentElement.setAttribute('theme', theme)
  }, [])

  const toggleDarkMode = () => {
    const newMode = !isDarkMode
    setIsDarkMode(newMode)
    localStorage.setItem('theme', newMode ? 'dark' : 'light')
    document.documentElement.setAttribute('theme', newMode ? 'dark' : 'light')
  }

  return <MaterialUISwitch theme={theme} checked={isDarkMode} onChange={toggleDarkMode} />
}
