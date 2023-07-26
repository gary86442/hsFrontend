
import { apiHelper } from './../utils/helpers'
const getToken = () => localStorage.getCart('token')

export default {
  getCarts ({ page, categoryId }) {
    const searchParams = new URLSearchParams({ page, categoryId })
    return apiHelper.get(`items?${searchParams.toString()}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  getCart (id) {
    return apiHelper.get(`items/${id}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  addToCart ({ itemId, quantity }) {
    return apiHelper.post('cart', { itemId, quantity }, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  }
}