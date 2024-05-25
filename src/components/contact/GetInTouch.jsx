import { useState, useEffect } from 'react'
import { useFormik } from 'formik'
import { CircularProgress } from '@mui/material'
import { FormTextField } from './FormTextField'
import * as Yup from 'yup'

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  mobile: '',
  subject: '',
  description: '',
}

const validationSchema = Yup.object({
  firstName: Yup.string()
    .min(2, 'First Name must be at least 2 characters')
    .max(20, 'First Name must be at most 20 characters')
    .required('First Name is required'),
  lastName: Yup.string()
    .min(2, 'Last Name must be at least 2 characters')
    .max(20, 'Last Name must be at most 20 characters')
    .required('Last Name is required'),
  email: Yup.string().email('Invalid Email Address').required('Email is required'),
  mobile: Yup.string()
    .min(10, 'Mobile Number must be of 10 digits')
    .max(10, 'Mobile Number must be of 10 digits')
    .matches(/^\d{10}$/, 'Invalid Mobile Number'),
  subject: Yup.string().max(100, 'Subject must be at most 20 characters').required('Subject is required'),
  description: Yup.string().max(500, 'Description must be at most 20 characters').required('Description is required'),
})

export const GetInTouch = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    window.addEventListener('resize', () => setScreenWidth(window.innerWidth))

    return () => {
      window.removeEventListener('resize', () => setScreenWidth(window.innerWidth))
    }
  }, [])

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values, { setSubmitting, resetForm }) => {
      setLoading(true)

      fetch('https://formsubmit.co/ajax/talaviyasanket01@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(values),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            alert('Message sent successfully')
            resetForm()
          } else {
            alert('Message failed to send')
          }
          setSubmitting(false)
          setLoading(false)
        })
        .catch((error) => {
          alert('An error occurred: ' + error.message)
          setSubmitting(false)
          setLoading(false)
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
            loading ? 'opacity-25' : 'opacity-100'
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
            loading ? 'opacity-25' : 'opacity-100'
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
        <div className={` w-full md:flex justify-center max-md:space-y-7 ${loading ? 'opacity-25' : 'opacity-100'}`}>
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
        <div className={` w-full md:flex justify-center max-md:space-y-7 ${loading ? 'opacity-25' : 'opacity-100'}`}>
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
            loading ? 'opacity-25' : 'opacity-100'
          }`}
        >
          Send Message
        </button>
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
