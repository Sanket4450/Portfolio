import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { navButtons } from '../../data/header'
import { DarkModeContext } from '../../context'
import { NavLinkClasses, NavLinkActiveClasses } from '../../common/styles'

export const NavBar = () => {
  const {
    theme: { textPrimary },
  } = useContext(DarkModeContext)

  return (
    <nav className="max-sm:hidden flex text-sm max-md:space-x-6 md:space-x-8 2xl:space-x-10">
      {navButtons.map((button) => (
        <NavLink
          key={button.id}
          to={button.path}
          style={{ color: textPrimary, textDecorationColor: textPrimary }}
          className={({ isActive }) => (isActive ? NavLinkActiveClasses : NavLinkClasses)}
        >
          {button.text}
        </NavLink>
      ))}
    </nav>
  )
}
