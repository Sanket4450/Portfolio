import { useContext, useEffect } from 'react'
import { DarkModeSwitch } from './DarkModeSwitch'
import { NavBar } from './NavBar'
import { DarkModeContext } from '../../context'

export const Header = () => {
  const {
    theme: { bgPrimary },
  } = useContext(DarkModeContext)

  return (
    <header
      style={{ backgroundColor: bgPrimary }}
      className="flex max-phone:justify-center justify-between items-center py-2"
    >
      <DarkModeSwitch />
      <NavBar />
    </header>
  )
}
