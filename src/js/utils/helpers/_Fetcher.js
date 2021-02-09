export const getMyData = async (endpoint) => {
  try {
    const res = await fetch(endpoint)
    const data = await res.json()
    return data
  } catch (err) {
    throw err
  }
}
