import { useEffect } from 'react'
import { UserDetails } from '../../components/home'
import { UserServices } from '../../components/home'
import { RecentWork } from '../../components/home'
import { ContactMe } from '../../components/home'

export const Home = () => {
  useEffect(() => {
    document.title = 'Portfolio - Welcome to my portfolio!'
  }, [])

  return (
    <div>
      <div className=" bg-primary max-sm:px-5 sm:px-[5vw] lg:px-[80px] py-12 sm:py-24 space-y-20">
        <UserDetails />
        <UserServices />
      </div>
      <div className=" bg-gray-weak max-sm:px-5 sm:px-[5vw] lg:px-[80px]">
        <RecentWork />
      </div>
      <div className=" bg-primary max-sm:px-5 sm:px-[5vw] lg:px-[80px]">
        <ContactMe />
      </div>
    </div>
  )
}
