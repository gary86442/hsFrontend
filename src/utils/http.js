import axios from 'axios'

const httpInstance = axios.create({
  baseURL: 'https://herstoryweb-b60819a85d94.herokuapp.com',
  timeout: 5000
})

//攔截器
httpInstance.interceptors.request.use(config => { //攔截請求
  return config
}, err => {
  return Promise.reject(err)
})

//axios響應式攔截器
httpInstance.interceptors.response.use(res => { //攔截響應
  return res.data
}, err => {
  return Promise.reject(err)
})



export default httpInstance