import { getApi } from '../apiService'

export const getReceivedMessages = async (token, { page = 1, limit = 10 }) => {
  const headers = {
    Authorization: `Bearer ${token}`,
  }

  const query = `?page=${page}&limit=${limit}`

  const data = await getApi(`/admin/messages${query}`, headers)

  if (!data.success) {
    throw Error(data.message)
  }
  return data.results
}
