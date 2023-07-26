<script setup>
import { ref } from 'vue';
import authorizationAPI from '@/apis/authorization';
import { Toast } from '@/utils/helpers'
import { useRouter } from 'vue-router'


const router = useRouter();
const account = ref('');
const password = ref('');
const isLoading = ref(false)
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
    isLoading.value = true
    router.push('/home')
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

      <button :disabled="isLoading" type="submit" class="btn btn-primary">
      Login</button>
      
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
    .spinner {
  padding-top: 100px;
}

.bouncing-loader {
  display: flex;
  justify-content: center;
}

.bouncing-loader > div {
  width: 1rem;
  height: 1rem;
  margin: 3rem 0.2rem;
  background: #bd2333;
  border-radius: 50%;
  animation: bouncing-loader 0.6s infinite alternate;
}

.bouncing-loader > div:nth-child(2) {
  animation-delay: 0.2s;
}

.bouncing-loader > div:nth-child(3) {
  animation-delay: 0.4s;
}

@keyframes bouncing-loader {
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0.1;
    transform: translateY(-1rem);
  }
}
</style>