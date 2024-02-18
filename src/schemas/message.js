import * as Yup from 'yup'

export const messageSchema = Yup.object({
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
