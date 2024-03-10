const baseURL = import.meta.env.VITE_BASE_URL

export default async (method, endpoint, data = {}, headers = {}) => {
  return fetch(`${baseURL}/${endpoint}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => error)
}
