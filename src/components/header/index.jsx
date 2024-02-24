import { DarkModeSwitch } from './DarkModeSwitch'
import { NavBar } from './NavBar'
import { NavMenu } from './NavMenu'

export const Header = () => {
  return (
    <header className=" bg-primary max-sm:px-5 sm:px-[5vw] lg:px-[80px] h-16 flex justify-between items-center sticky top-0 z-10 drop-shadow-md ">
      <DarkModeSwitch />
      <NavBar />
      <NavMenu />
    </header>
  )
}
