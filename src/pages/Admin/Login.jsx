import { useEffect } from 'react'
import { AdminLogin } from '../../components/login'

export const Login = () => {
  useEffect(() => {
    document.title = 'Admin Login | Portfolio'
  }, [])

  return (
    <div className=" bg-primary max-sm:px-5 sm:px-[5vw] lg:px-[80px]">
      <AdminLogin />
    </div>
  )
}
