
import { apiHelper } from './../utils/helpers'
const getToken = () => localStorage.getCart('token')

export default {
  getCarts ({ page, categoryId }) {
    const searchParams = new URLSearchParams({ page, categoryId })
    return apiHelper.get(`items?${searchParams.toString()}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  getItem ({ itemId }) {
    return apiHelper.get(`carts/${itemId}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  }
}