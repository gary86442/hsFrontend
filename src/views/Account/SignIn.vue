<script setup>
import { ref } from 'vue';
import authorizationAPI from '@/apis/authorization';
import { Toast } from '@/utils/helpers'
import { useRouter } from 'vue-router'

const router = useRouter();
const account = ref('');
const password = ref('');

const handleSubmit = (e) => {
  e.preventDefault(); // 阻止表單送出
 if (!account.value || !password.value ) {
        Toast.fire({
          icon: 'warning',
          title: '請填入 email 和 password'
        })}
  authorizationAPI.signIn({
    account: account.value,
    password: password.value
  }).then(response => {
    const { data } = response
    if (data.status === 'error') {
      throw new Error(data.message)
    }
    // 將 token 存到 localStorage
    localStorage.setItem('token', data.token)
    router.push('/items')
  }).catch(error => {
    console.error('Error occurred:', error);
    // 清空表單
    this.account = ''
    this.password = ''
        // 顯示錯誤提示
        Toast.fire({
          icon: 'warning',
          title: '請確認您輸入了正確的帳號密碼'
        })
        console.log('error', error)
      })
};
</script>


<template>
  <div class="container py-5">
    <form  @submit.prevent.stop="handleSubmit"  class="w-100">
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 font-weight-normal">
          Sign In
        </h1>
      </div>

      <div class="form-label-group mb-2">
        <label for="account">account</label>
        <input
          id="account"
          name="account"
          v-model="account"
          type="account"
          class="form-control"
          placeholder="account"
          autocomplete="account"
          required
          autofocus
        >
      </div>

      <div class="form-label-group mb-3">
        <label for="password">Password</label>
        <input
          id="password"
          name="password"
          v-model="password"
          type="password"
          class="form-control"
          placeholder="Password"
          autocomplete="current-password"
          required
        >
      </div>

      <button
        class="btn btn-lg btn-primary btn-block mb-3"
        type="submit"
      >
        Submit
      </button>

      <div class="text-center mb-3">
        <router-link to="/signup">
          Sign Up
        </router-link>
      </div>

      <p class="mt-5 mb-3 text-muted text-center">
        &copy; 2021
      </p>
    </form>
  </div>
</template>

<style>
  .btn {
        width: 100%;
        height: 100%;
        background: #800000;
        color: #ffffff;
        border-radius: 20px;
        display: flex;
        justify-content: center; /* 水平置中 */
        align-items: center; /* 垂直置中 */
    }
</style>