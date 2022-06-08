export async function jsonFromSheets (url) {
  const response = await fetch(url)
  if (!response.ok) throw new Error('Network response was not OK')
  const json = await response.json()
  const data = await json.gistBlog
  return data
}
