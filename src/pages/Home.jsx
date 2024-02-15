import { useContext } from 'react'
import { ThemeContext } from '../context'
import { UserDetails } from '../components/home'
import { UserServices } from '../components/home'
import { RecentWork } from '../components/home'

export const Home = () => {
  const {
    theme: { bgPrimary, grayWeak },
  } = useContext(ThemeContext)

  return (
    <div>
      <div style={{ backgroundColor: bgPrimary }} className="max-sm:px-5 sm:px-[5vw] lg:px-[80px]">
        <UserDetails />
        <UserServices />
      </div>
      <div
        style={{ backgroundColor: grayWeak }}
        className="max-sm:px-5 sm:px-[5vw] lg:px-[80px] max-lg:py-[50px] lg:py-[80px]"
      >
        <RecentWork />
      </div>
    </div>
  )
}
