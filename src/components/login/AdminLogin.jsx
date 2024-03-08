import { useState, useEffect } from 'react'
import { Box, TextField } from '@mui/material'
import { userDetails } from '../../data/user'

export const AdminLogin = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const [error, setError] = useState('')
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
        <img src={userDetails.logo} className=" w-28 md:w-40" />
      </div>

      <h1 className=" text-gray-strong font-sans text-center text-3xl sm:text-5xl lg:text-6xl">
        Login to the Admin Section
      </h1>

      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="filled-basic" label="Filled" variant="filled" />
      </Box>
    </section>
  )
}
