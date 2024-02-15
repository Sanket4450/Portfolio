import { NavLink } from 'react-router-dom'
import { navButtons } from '../../data/header'
import { NavLinkClasses, NavLinkActiveClasses } from '../../common/styles'

export const NavBar = () => {
  return (
    <nav className=" max-sm:hidden flex text-sm max-md:space-x-6 md:space-x-8 2xl:space-x-10">
      {navButtons.map((button) => (
        <NavLink
          key={button.id}
          to={button.path}
          className={({ isActive }) => (isActive ? NavLinkActiveClasses : NavLinkClasses)}
        >
          {button.text}
        </NavLink>
      ))}
    </nav>
  )
}
