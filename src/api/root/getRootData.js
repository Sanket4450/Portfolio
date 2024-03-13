import { ApiCaller } from '../common'

export const getRootData = async () => {
  try {
    const dataObject = await ApiCaller('GET', '/admin')

    if (!dataObject.success) {
      throw new Error(dataObject.message)
    }
    return dataObject.results
  } catch (error) {
    throw new Error(error.message)
  }
}
