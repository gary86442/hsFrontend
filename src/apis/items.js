
import { apiHelper } from './../utils/helpers'

export default {
  getItems ({ page, categoryId }) {
    const searchParams = new URLSearchParams({ page, categoryId })
    return apiHelper.get(`items?${searchParams.toString()}`)
  },
  getItem ({ itemId }) {
    return apiHelper.get(`items/${itemId}`)
  }
}