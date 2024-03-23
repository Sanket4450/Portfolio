import { getApi } from '../apiService'

export const getAdminRootData = async () => {
  const data = await getApi('/admin')

  if (!data.success) {
    throw Error(data.message)
  }
  return data.results
}
