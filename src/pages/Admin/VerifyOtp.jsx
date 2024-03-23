import { useEffect } from 'react'
import { AdminVerifyOtp } from '../../components/login'

export const VerifyOtp = ({ isSecretVerified, isOtpVerified, setIsOtpVerified }) => {
  useEffect(() => {
    document.title = 'Admin Verify OTP | Portfolio'
  }, [])

  return (
    <div className=" bg-primary max-sm:px-5 sm:px-[5vw] lg:px-[80px]">
      <AdminVerifyOtp
        isSecretVerified={isSecretVerified}
        isOtpVerified={isOtpVerified}
        setIsOtpVerified={setIsOtpVerified}
      />
    </div>
  )
}
