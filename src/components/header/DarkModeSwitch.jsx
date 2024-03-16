import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleTheme } from '../../store/slices/theme'
import { createTheme } from '@mui/material/styles'
import { MaterialUISwitch } from '../ui/MaterialUISwitch'

export const DarkModeSwitch = () => {
  const theme = useSelector((state) => state.theme.value)

  const dispatch = useDispatch()

  const currentTheme = createTheme({ palette: { mode: theme } })

  useEffect(() => {
    const defaultTheme = localStorage.getItem('theme')
    dispatch(toggleTheme(defaultTheme || 'dark'))
    document.documentElement.setAttribute('theme', defaultTheme || 'dark')
  }, [])

  const toggleDarkMode = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    dispatch(toggleTheme(newTheme))
    localStorage.setItem('theme', newTheme)
    document.documentElement.setAttribute('theme', newTheme)
  }

  return <MaterialUISwitch id="switch1" theme={currentTheme} checked={theme === 'dark'} onChange={toggleDarkMode} />
}
