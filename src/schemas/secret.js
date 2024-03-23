import * as Yup from 'yup'

export const secretSchema = Yup.object({
  secret: Yup.string()
    .min(8, 'Admin Secret must be at least 8 characters')
    .max(20, 'Admin Secret must be at most 20 characters')
    .required('Admin Secret is required'),
})
