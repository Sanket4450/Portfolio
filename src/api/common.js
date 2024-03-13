const baseURL = import.meta.env.VITE_BASE_URL

export const ApiCaller = async (method, endpoint, data = {}, headers = {}) => {
  return fetch(`${baseURL}${endpoint}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    body: method === 'GET' ? null : JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => error)
}
