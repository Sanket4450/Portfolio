import { useContext } from 'react'
import { DarkModeSwitch } from './DarkModeSwitch'
import { NavBar } from './NavBar'
import { DarkModeContext } from '../../context'

export const Header = () => {
  const {
    theme: { bgPrimary },
  } = useContext(DarkModeContext)

  return (
    <header
      className="flex max-phone:justify-center justify-between items-center py-2 max-sm:px-2 sm:px-[5vw] lg:px-[80px]"
      style={{ backgroundColor: bgPrimary }}
    >
      <DarkModeSwitch />
      <NavBar />
    </header>
  )
}
