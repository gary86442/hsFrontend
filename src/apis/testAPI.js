import httpInstance from "@/utils/http.js"

export const testAPI = () => {
  return httpInstance({
    url: '/api/items',
    method: 'get'
  })
}