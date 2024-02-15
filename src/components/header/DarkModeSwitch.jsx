import { useContext } from 'react'
import { createTheme } from '@mui/material/styles'
import { MaterialUISwitch } from '../ui/MaterialUISwitch'
import { ThemeContext } from '../../context/Theme'

export const DarkModeSwitch = () => {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext)

  const theme = createTheme({ palette: { mode: isDarkMode ? 'dark' : 'light' } })

  return <MaterialUISwitch theme={theme} checked={isDarkMode} onChange={toggleDarkMode} />
}
