import { getApi } from '../apiService'

export const getAdminRootData = async (token) => {
  const headers = {
    Authorization: `Bearer ${token}`,
  }

  const data = await getApi('/admin', headers)

  if (!data.success) {
    throw Error(data.message)
  }
  return data.results
}
