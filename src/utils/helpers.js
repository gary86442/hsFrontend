import axios from 'axios'
import Swal from 'sweetalert2'

const baseURL = 'https://herstoryweb-b60819a85d94.herokuapp.com/api/'

export const apiHelper = axios.create({
  baseURL
})


export const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
})



export const signin = async ({ account, password }) => {
  try {
    const { data } = await axios.post(`${baseURL}users/signin`, { account, password })
    const authToken = data.token
    if (authToken) return { success: true, ...data }
  } catch (error) {
    return { success: false, error }
  }
}