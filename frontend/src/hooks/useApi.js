export const useApi = async () => {
  const response = await fetch('/api/object', {
    method: "GET",
    
    headers: {
      "Content-Type": "application/json",
    }
  })

  const responseData = await response.json()

  console.log(responseData)

  return responseData
}

export default { useApi }