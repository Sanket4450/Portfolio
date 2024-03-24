import { useEffect } from 'react'
import { AdminVerifySecret } from '../../components/login'

export const VerifySecret = ({ isSecretVerified, setIsSecretVerified }) => {
  useEffect(() => {
    document.title = 'Admin Login | Portfolio'
  }, [])

  return (
    <div className=" bg-primary max-sm:px-5 sm:px-[5vw] lg:px-[80px]">
      <AdminVerifySecret isSecretVerified={isSecretVerified} setIsSecretVerified={setIsSecretVerified} />
    </div>
  )
}
