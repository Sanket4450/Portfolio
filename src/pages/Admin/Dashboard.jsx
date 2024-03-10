import { useEffect } from 'react'
import { AdminHome } from '../../components/admin'

export const Dashboard = () => {
  useEffect(() => {
    document.title = 'Admin Dashboard | Portfolio'
  }, [])

  return (
    <div className=" bg-primary max-sm:px-5 sm:px-[5vw] lg:px-[80px]">
      <AdminHome />
    </div>
  )
}
