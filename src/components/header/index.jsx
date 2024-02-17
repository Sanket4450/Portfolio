import { DarkModeSwitch } from './DarkModeSwitch'
import { NavBar } from './NavBar'

export const Header = () => {
  return (
    <header className=" bg-primary max-sm:px-5 sm:px-[5vw] lg:px-[80px] h-16 flex max-phone:justify-center phone:justify-between items-center sticky top-0">
      <DarkModeSwitch />
      <NavBar />
    </header>
  )
}
