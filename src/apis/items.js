
import { apiHelper } from './../utils/helpers'
const getToken = () => localStorage.getItem('token')

export default {
  getItems ({ page, categoryId }) {
    const searchParams = new URLSearchParams({ page, categoryId })
    return apiHelper.get(`items?${searchParams.toString()}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  getItem ({ itemId }) {
    return apiHelper.get(`items/${itemId}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  }
}