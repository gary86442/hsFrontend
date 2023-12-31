import { apiHelper } from '@/utils/helpers'

export default {
  // 帶入需要的參數
  signIn ({ account, password }) {
    // 這裡 return 的會是一個 Promise
    return apiHelper.post('/signIn', {
      account,
      password
    })
  },
  signUp ({ account, name, email, password, passwordCheck }) {
    return apiHelper.post('/signUp', {
      account,
      name,
      email,
      password,
      passwordCheck
    })
  }
}