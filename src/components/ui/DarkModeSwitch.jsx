import { useContext } from 'react'
import { createTheme } from '@mui/material/styles'
import { MaterialUISwitch } from './MaterialUISwitch'
import { DarkModeContext } from '../../context/DarkMode'

const theme = createTheme({ palette: { mode: 'dark' } })

export const DarkModeSwitch = () => {
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext)

  return <MaterialUISwitch theme={theme} checked={isDarkMode} onChange={toggleDarkMode} />
}
