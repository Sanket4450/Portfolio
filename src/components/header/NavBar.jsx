import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { navButtons } from '../../data/header'
import { DarkModeContext } from '../../context'

export const NavBar = () => {
  const {
    theme: { textPrimary },
  } = useContext(DarkModeContext)

  return (
    <nav className="max-phone:hidden flex text-sm max-md:space-x-4 space-x-10">
      {navButtons.map((button) => (
        <NavLink
          key={button.id}
          to={button.path}
          style={{ color: textPrimary, textDecorationColor: textPrimary }}
          className="text-center text-[13px] font-semibold hover:cursor-pointer hover:underline hover:decoration-2 hover:underline-offset-4"
        >
          {button.text}
        </NavLink>
      ))}
    </nav>
  )
}
