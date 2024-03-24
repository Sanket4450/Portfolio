import { getApi } from '../apiService'

export const sendAdminOtp = async () => {
  const data = await getApi('/admin/session/otp')

  if (!data.success) {
    throw Error(data.message)
  }
  return data.message
}
