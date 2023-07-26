<script setup>
import { ref } from 'vue';



const name = ref('');
const email = ref('');
const password = ref('');
const passwordCheck = ref('');
const account = ref('');

const handleSubmit = () => {
  const data = JSON.stringify({
    name: name.value,
    email: email.value,
    account: account.value,
    password: password.value,
    passwordCheck: passwordCheck.value
  });
if (!name.value || !email.value || !account.value || !password.value || !passwordCheck.value) {
    alert('請填入所有欄位');
    return;
  }

if (password.value.length < 6) {
    alert('密碼長度需大於6個字');
    return;
  }

  if (password.value !== passwordCheck.value) {
    alert('密碼不一致');
    return;
  }
  // TODO: 向後端驗證使用者登入資訊是否合法
  console.log('data', data);
};
</script>




<template>
  <div class="container py-5">
    <form
      class="w-100"
      @submit.stop.prevent="handleSubmit"
    >
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 font-weight-normal">
          Sign Up
        </h1>
      </div>

      <div class="form-label-group mb-2">
        <label for="name">Name</label>
        <input
          id="name"
          v-model="name"
          name="name"
          type="text"
          class="form-control"
          placeholder="name"
          autocomplete="username"
          required
          autofocus
        >
      </div>

      <div class="form-label-group mb-2">
        <label for="email">Email</label>
        <input
          id="email"
          v-model="email"
          name="email"
          type="email"
          class="form-control"
          placeholder="email"
          autocomplete="email"
          required
        >
      </div>

      <div class="form-label-group mb-3">
        <label for="password">Password</label>
        <input
          id="password"
          v-model="password"
          name="password"
          type="password"
          class="form-control"
          placeholder="Password"
          autocomplete="new-password"
          required
        >
      </div>

      <div class="form-label-group mb-3">
        <label for="password-check">Password Check</label>
        <input
          id="password-check"
          v-model="passwordCheck"
          name="passwordCheck"
          type="password"
          class="form-control"
          placeholder="Password"
          autocomplete="new-password"
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
        <p>
          <router-link to="/signin">
            Sign In
          </router-link>
        </p>
      </div>

      <p class="mt-5 mb-3 text-muted text-center">
        © 2017-2018
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

    .btn-link {
        color: #800000;
        display: block;
        text-align: center;
    }
    

</style>