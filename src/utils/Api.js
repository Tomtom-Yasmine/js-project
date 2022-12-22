
export const getUserFromApi = async () => {
  const req = await fetch('https://reqres.in/api/users')
  const res = await req.json()

  return res.data
}

export const getPostFromApi = async () => {
  const req = await fetch('https://jsonplaceholder.typicode.com/posts')
  const res = await req.json()

  return res
}