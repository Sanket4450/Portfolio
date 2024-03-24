import { postApi } from '../apiService'

export const verifyAdminSecret = async (secret) => {
  const data = await postApi('/admin/session/verify-secret', { secret })

  if (!data.success) {
    throw Error(data.message)
  }
}
