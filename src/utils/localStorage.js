export const getItem = (key) => localStorage.getItem(String(key))

export const setItem = (key, value) => {
  localStorage.setItem(String(key), String(value))
}
