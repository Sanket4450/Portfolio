import { useState, useEffect } from 'react'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import { CircularProgress } from '@mui/material'
import { FormTextField } from './FormTextField'
import { messageSchema } from '../../schemas'
import { sendMessage } from '../../api/user'

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  mobile: '',
  subject: '',
  description: '',
}

export const GetInTouch = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    window.addEventListener('resize', () => setScreenWidth(window.innerWidth))

    return () => {
      window.removeEventListener('resize', () => setScreenWidth(window.innerWidth))
    }
  }, [])

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues,
    validationSchema: messageSchema,
    onSubmit: (values, action) => {
      setErrorMessage('')
      setLoading(true)

      const payload = { ...values, mobile: Number(values.mobile) }

      sendMessage(payload)
        .then(() => {
          setLoading(false)
          action.resetForm()
          navigate('/submit')
        })
        .catch((error) => {
          setLoading(false)
          setErrorMessage(error.message)
        })
    },
  })
  return (
    <section className=" py-12">
      <div className=" space-y-4">
        <h2 className=" text-primary font-semibold text-4xl text-center">Get In Touch.</h2>
        <p className=" text-gray-primary text-center">
          Connect with me for your requirements or queries. I'll get back to you
        </p>
      </div>
      <form onSubmit={handleSubmit} className=" flex flex-col items-center space-y-7 py-10">
        <div
          className={` w-full md:flex md:justify-center max-md:space-y-7 md:space-x-5 ${
            loading ? 'opacity-40' : 'opacity-100'
          }`}
        >
          <FormTextField
            width={screenWidth < 768 ? '100%' : screenWidth < 1024 ? '330px' : '400px'}
            label="First Name"
            name="firstName"
            value={values.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={errors.firstName && touched.firstName ? `* ${errors.firstName}` : null}
          />
          <FormTextField
            width={screenWidth < 768 ? '100%' : screenWidth < 1024 ? '330px' : '400px'}
            label="Last Name"
            name="lastName"
            value={values.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={errors.lastName && touched.lastName ? `* ${errors.lastName}` : null}
          />
        </div>
        <div
          className={` w-full md:flex justify-center max-md:space-y-7 md:space-x-5 ${
            loading ? 'opacity-40' : 'opacity-100'
          }`}
        >
          <FormTextField
            width={screenWidth < 768 ? '100%' : screenWidth < 1024 ? '330px' : '400px'}
            label="Mobile Number"
            name="mobile"
            value={values.mobile}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={errors.mobile && touched.mobile ? `* ${errors.mobile}` : null}
          />
          <FormTextField
            width={screenWidth < 768 ? '100%' : screenWidth < 1024 ? '330px' : '400px'}
            label="Email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={errors.email && touched.email ? `* ${errors.email}` : null}
          />
        </div>
        <div className={` w-full md:flex justify-center max-md:space-y-7 ${loading ? 'opacity-40' : 'opacity-100'}`}>
          <FormTextField
            width={screenWidth < 768 ? '100%' : screenWidth < 1024 ? '680px' : '820px'}
            label="Subject"
            name="subject"
            value={values.subject}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={errors.subject && touched.subject ? `* ${errors.subject}` : null}
          />
        </div>
        <div className={` w-full md:flex justify-center max-md:space-y-7 ${loading ? 'opacity-40' : 'opacity-100'}`}>
          <FormTextField
            width={screenWidth < 768 ? '100%' : screenWidth < 1024 ? '680px' : '820px'}
            label="Write a Message"
            name="description"
            value={values.description}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={errors.description && touched.description ? `* ${errors.description}` : null}
            multiline={true}
          />
        </div>
        <button
          type="submit"
          className={` bg-text-theme-primary text-bg-primary hover:bg-text-theme-hover-primary font-bold text-lg tracking-wider px-8 py-4 rounded-full transition duration-200 ${
            loading ? 'opacity-40' : 'opacity-100'
          }`}
        >
          Send Message
        </button>
        {errorMessage && <p className=" text-gray-strong font-semibold text-2xl text-center">{`* ${errorMessage}`}</p>}
        {loading && (
          <CircularProgress
            size={50}
            thickness={4}
            style={{ color: 'var(--text-theme-primary)' }}
            className=" relative bottom-[430px] md:bottom-[350px]"
          />
        )}
      </form>
    </section>
  )
}
