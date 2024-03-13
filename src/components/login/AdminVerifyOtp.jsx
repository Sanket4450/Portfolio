import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import OtpInput from 'react-otp-input'
import { verificationLogos } from '../../data/auth'

export const AdminVerifyOtp = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const theme = useSelector((state) => state.theme.value)
  const [otp, setOtp] = useState('')
  const [isOtpSent, setIsOtpSent] = useState(localStorage.getItem('isOtpSent') === 'true' ? true : false)

  useEffect(() => {
    window.addEventListener('resize', () => setScreenWidth(window.innerWidth))

    return () => {
      window.removeEventListener('resize', () => setScreenWidth(window.innerWidth))
    }
  }, [])

  const handleOtpChange = (newOtp) => {
    if (/^[0-9]*$/.test(newOtp)) {
      setOtp(newOtp)
    }
  }

  const handleSendOtp = () => {
    setIsOtpSent(true)
    localStorage.setItem('isOtpSent', 'true')
  }

  useEffect(() => {
    localStorage.getItem('isOtpSent') === 'true' ? setIsOtpSent(true) : setIsOtpSent(false)
  }, [])

  return (
    <section>
      <img
        src={theme === 'dark' ? verificationLogos.verificationLogoDark : verificationLogos.verificationLogoLight}
        className=" w-28 mx-auto mt-12 mb-8"
      />
      <h1 className=" text-primary font-semibold text-4xl text-center">Verification</h1>
      <OtpInput
        value={otp}
        onChange={handleOtpChange}
        numInputs={6}
        renderInput={(props) => <input {...props} />}
        inputStyle={{
          width: screenWidth >= 440 ? '55px' : '13%',
          height: screenWidth >= 440 ? '55px' : '100%',
          fontSize: '25px',
          borderWidth: theme !== 'dark' ? '2px' : '0',
          borderColor: 'var(--text-theme-primary)',
          borderRadius: '5px',
          outline: 'none',
        }}
        containerStyle={{
          width: screenWidth >= 440 ? '400px' : '85vw',
          height: screenWidth >= 440 ? '55px' : '11vw',
          display: 'flex',
          justifyContent: 'space-between',
          margin: '30px auto',
        }}
      />
      <div className=" flex justify-center">
        {!isOtpSent ? (
          <button
            className=" w-[85vw] phone:w-[400px] h-[12vw] phone:h-[50px] bg-text-theme-primary hover:bg-text-theme-hover-primary text-bg-primary text-lg phone:text-xl font-semibold rounded-md"
            disabled={isOtpSent}
            onClick={handleSendOtp}
          >
            Get OTP
          </button>
        ) : (
          <button className=" w-[85vw] phone:w-[400px] h-[12vw] phone:h-[50px] bg-text-theme-primary hover:bg-text-theme-hover-primary text-bg-primary text-lg phone:text-xl font-semibold rounded-md">
            Verify OTP
          </button>
        )}
      </div>
      {isOtpSent && (
        <p className=" text-gray-primary font-semibold text-center tracking-wide my-5">
          Didn't receive the verification OTP?
          <span className=" text-theme-primary ml-2 hover:cursor-pointer hover:text-theme-hover-primary transition duration-200">
            Resend
          </span>
        </p>
      )}
    </section>
  )
}
