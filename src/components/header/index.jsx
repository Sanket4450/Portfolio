import { useContext, useEffect } from 'react'
import { DarkModeSwitch } from './DarkModeSwitch'
import { NavBar } from './NavBar'
import { ThemeContext } from '../../context'

export const Header = () => {
  const {
    theme: { bgPrimary },
  } = useContext(ThemeContext)

  return (
    <header
      style={{ backgroundColor: bgPrimary }}
      className="max-sm:px-5 sm:px-[5vw] lg:px-[80px] h-16 flex max-phone:justify-center phone:justify-between items-center"
    >
      <DarkModeSwitch />
      <NavBar />
    </header>
  )
}
