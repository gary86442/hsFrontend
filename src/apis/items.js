
import { apiHelper } from './../utils/helpers'

export default {
  getItems ({ page, CategoryId }) {
    const searchParams = new URLSearchParams({ page,CategoryId })
    return apiHelper.get(`items?${searchParams.toString()}`)
  },
  getItem ({ itemId }) {
    return apiHelper.get(`items/${itemId}`)
  }
}