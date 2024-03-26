import { postApi } from '../apiService'

export const sendMessage = async (payload) => {
  const data = await postApi('/messages', payload)

  if (!data.success) {
    throw Error(data.message)
  }
}
