import { navButtons } from '../../data/header'
import { NavButton } from './NavButton'

export const NavBar = () => {
  return (
    <nav className="max-phone:hidden flex text-sm max-md:space-x-4 space-x-10">
      {navButtons.map((button) => (
        <NavButton key={button.id} text={button.text} />
      ))}
    </nav>
  )
}
