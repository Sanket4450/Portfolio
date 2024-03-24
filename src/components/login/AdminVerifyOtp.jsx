import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import OtpInput from 'react-otp-input'
import { verificationLogos } from '../../data/auth'
import { sendAdminOtp, verifyAdminOtp } from '../../api/admin'
import { getItem, setItem, removeItem } from '../../utils/localStorage'

export const AdminVerifyOtp = ({ isSecretVerified, isOtpVerified, setIsOtpVerified }) => {
  const navigate = useNavigate()
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const [loading, setLoading] = useState(false)
  const theme = useSelector((state) => state.theme.value)
  const [otp, setOtp] = useState('')
  const [otpSendMessage, setOtpSendMessage] = useState('')
  const [otpSendErrorMessage, setOtpSendErrorMessage] = useState('')
  const [isOtpSent, setIsOtpSent] = useState(getItem('isOtpSent') === 'true' ? true : false)

  useEffect(() => {
    !isSecretVerified && navigate('/admin/verify-secret')
  }, [isSecretVerified])

  useEffect(() => {
    isOtpVerified && navigate('/admin')
  }, [isOtpVerified])

  useEffect(() => {
    getItem('isOtpSent') === 'true' ? setIsOtpSent(true) : setIsOtpSent(false)
  }, [])

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

  const handleOtpSend = () => {
    sendAdminOtp()
      .then((message) => {
        setItem('isOtpSent', true)
        setIsOtpSent(true)
        setOtpSendErrorMessage('')
        setOtpSendMessage(message)
      })
      .catch((error) => setOtpSendErrorMessage(error.message))
  }

  const handleOtpVerify = () => {
    verifyAdminOtp(parseInt(otp))
      .then(() => {
        removeItem('isOtpSent')
        setItem('isOtpVerified', true)
        setIsOtpVerified(true)
        navigate('/admin')
      })
      .catch((error) => setOtpSendErrorMessage(error.message))
  }

  return (
    <section>
      <img
        src={theme === 'dark' ? verificationLogos.verificationLogoDark : verificationLogos.verificationLogoLight}
        className=" w-28 mx-auto mt-12 mb-8"
      />
      <h1 className=" text-primary font-semibold text-4xl text-center">Verification</h1>
      <div className=" my-8">
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
            margin: '0 auto',
          }}
        />
        {otpSendErrorMessage && (
          <p className=" w-[85vw] phone:w-[400px] mx-auto mt-1.5 text=[14px] text-gray-primary font-semibold">
            * {otpSendErrorMessage}
          </p>
        )}
      </div>
      <div className=" flex justify-center">
        {!isOtpSent ? (
          <button
            className=" w-[85vw] phone:w-[400px] h-[12vw] phone:h-[50px] bg-text-theme-primary hover:bg-text-theme-hover-primary text-bg-primary text-lg phone:text-xl font-semibold rounded-md"
            disabled={isOtpSent}
            onClick={handleOtpSend}
          >
            Get OTP
          </button>
        ) : (
          <button
            className=" w-[85vw] phone:w-[400px] h-[12vw] phone:h-[50px] bg-text-theme-primary hover:bg-text-theme-hover-primary text-bg-primary text-lg phone:text-xl font-semibold rounded-md transition duration-200"
            onClick={handleOtpVerify}
          >
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
