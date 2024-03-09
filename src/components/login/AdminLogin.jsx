import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, TextField, InputAdornment } from '@mui/material'
import { userDetails } from '../../data/user'

const OTPField = ({ width, otp, setOTP }) => {
  const inputsRef = useRef([])

  const handleOTPChange = (index, value, event) => {
    if (value === '' || value.match(/^(0|[1-9]\d*)$/)) {
      const newOTP = [...otp]
      newOTP[index] = value
      setOTP(newOTP)

      if (event.key === 'Backspace' && value === '') {
        if (index > 0) {
          inputsRef.current[index - 1].focus()
          newOTP[index - 1] = ''
          setOTP(newOTP)
        }
      } else if (value && index < 5) {
        inputsRef.current[index + 1].focus()
      }
    }
  }

  return (
    <TextField
      variant="outlined"
      disabled={true}
      style={{ width }}
      sx={{
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: 'var(--bg-primary)',
          },
          '&:hover fieldset': {
            borderColor: 'var(--bg-primary)',
          },
          '&.Mui-focused fieldset': {
            borderColor: 'var(--bg-primary)',
          },
        },
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Box padding="0px">
              {Array.from({ length: 6 }).map((_, index) => (
                <input
                  key={index}
                  id={index}
                  type="text"
                  maxLength="1"
                  className=" w-[10.9vw] phone:w-[7.8vw] sm:w-10 h-8 sm:h-10 text-lg text-center border-[1px] border-black rounded-md mx-[1vw] sm:mx-2 outline-none"
                  ref={(el) => (inputsRef.current[index] = el)}
                  value={otp[index]}
                  onChange={(e) => handleOTPChange(index, e.target.value, e)}
                  onKeyDown={(e) => handleOTPChange(index, otp[index], e)}
                />
              ))}
            </Box>
          </InputAdornment>
        ),
      }}
    />
  )
}

export const AdminLogin = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const [otp, setOTP] = useState(['', '', '', '', '', ''])
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    window.addEventListener('resize', () => setScreenWidth(window.innerWidth))

    return () => {
      window.removeEventListener('resize', () => setScreenWidth(window.innerWidth))
    }
  }, [])

  return (
    <section className=" text-center">
      <div className=" flex justify-center py-14">
        <img src={userDetails.logo} className=" w-24 md:w-36" />
      </div>

      <h1 className=" text-gray-strong font-sans text-center text-3xl sm:text-5xl lg:text-6xl">
        Login to the Admin Section
      </h1>

      <div className=" my-10 space-y-8">
        <div className=" space-y-2">
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: screenWidth < 640 ? '95%' : '550px' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              label="Admin Secret"
              variant="outlined"
              spellCheck={false}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'var(--text-primary)',
                  },
                  '&:hover fieldset': {
                    borderColor: 'var(--text-primary)',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'var(--text-theme-primary)',
                  },
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: 'var(--text-theme-primary)',
                },
                '& .MuiFormHelperText-root': {
                  color: 'var(--gray-strong)', // Helper text color
                  fontSize: '14px', // Example additional style for font size
                  marginLeft: 0,
                },
                '& .MuiFormHelperText-contained': {
                  marginTop: '5px', // Example additional style for contained helper text
                },
                '& > :not(style)': { color: 'var(--text-primary)' },
              }}
            />
          </Box>
          <div
            style={{ width: screenWidth < 640 ? '95%' : '550px' }}
            className=" mx-auto flex flex-col phone:flex-row justify-between items-center max-phone:space-y-3"
          >
            <OTPField
              width={screenWidth < 440 ? '100%' : screenWidth < 640 ? '75%' : '364px'}
              otp={otp}
              setOTP={setOTP}
            />
            <button className=" w-28 phone:w-[22.5%] sm:w-40 h-[53px] sm:h-11 bg-text-theme-primary text-bg-primary border-2 border-text-theme-primary text-lg sm:text-xl rounded-md">
              Generate
            </button>
          </div>
        </div>
        <button
          style={{ width: screenWidth < 640 ? '95%' : '550px' }}
          className=" w-48 h-12 text-primary border-2 border-text-theme-primary rounded-md hover:text-bg-primary hover:bg-text-theme-primary transition duration-200 text-2xl"
        >
          Submit
        </button>
      </div>
    </section>
  )
}
