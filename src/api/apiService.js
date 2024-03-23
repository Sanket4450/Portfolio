import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_BASE_URL

const apiService = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
})

export const getApi = async (endpoint, headers = {}) => {
  try {
    const response = await apiService.get('/' + endpoint, {
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
    })

    return response.data
  } catch (error) {
    throw error
  }
}

export const postApi = async (endpoint, body = {}, headers = {}) => {
  try {
    const response = await apiService.post('/' + endpoint, body, {
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
    })

    return response.data
  } catch (error) {
    throw error
  }
}

export const putApi = async (endpoint, body = {}, headers = {}) => {
  try {
    const response = await apiService.put('/' + endpoint, body, {
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
    })

    return response.data
  } catch (error) {
    throw error
  }
}

export const patchApi = async (endpoint, body = {}, headers = {}) => {
  try {
    const response = await apiService.patch('/' + endpoint, JSON.stringify(body), {
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
    })

    return response.data
  } catch (error) {
    throw error
  }
}

export const deleteApi = async (endpoint, body = {}, headers = {}) => {
  try {
    const response = await apiService.delete('/' + endpoint, {
      data: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
    })

    return response.data
  } catch (error) {
    throw error
  }
}
