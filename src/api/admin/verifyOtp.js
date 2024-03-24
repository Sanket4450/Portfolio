import { postApi } from '../apiService'

export const verifyAdminOtp = async (otp) => {
  const data = await postApi('/admin/session/verify-otp', { otp })

  if (!data.success) {
    throw Error(data.message)
  }
}
