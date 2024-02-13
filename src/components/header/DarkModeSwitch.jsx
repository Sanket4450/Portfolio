import { useContext } from 'react'
import { createTheme } from '@mui/material/styles'
import { MaterialUISwitch } from '../ui/MaterialUISwitch'
import { DarkModeContext } from '../../context/DarkMode'

export const DarkModeSwitch = () => {
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext)

  const theme = createTheme({ palette: { mode: isDarkMode ? 'dark' : 'light' } })

  return <MaterialUISwitch theme={theme} checked={isDarkMode} onChange={toggleDarkMode} />
}
