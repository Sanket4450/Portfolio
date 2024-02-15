import { UserDetails } from '../components/home'
import { UserServices } from '../components/home'
import { RecentWork } from '../components/home'

export const Home = () => {
  return (
    <div>
      <div className=" bg-primary max-sm:px-5 sm:px-[5vw] lg:px-[80px]">
        <UserDetails />
        <UserServices />
      </div>
      <div className=" bg-gray-weak max-sm:px-5 sm:px-[5vw] lg:px-[80px] max-lg:py-[50px] lg:py-[80px]">
        <RecentWork />
      </div>
    </div>
  )
}
