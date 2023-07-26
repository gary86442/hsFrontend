import { apiHelper } from './../utils/helpers'
const getToken = () => localStorage.getItem('token')

export default {
  getItems ({ pagination, CategoryId }) {
    const searchParams = new URLSearchParams({ pagination, CategoryId })
    return apiHelper.get(`/restaurants?${searchParams.toString()}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  getItem ({ itemId }) {
    return apiHelper.get(`/restaurants/${itemId}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  }
}