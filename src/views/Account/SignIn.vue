<script setup>
    import { ref } from 'vue';
    import authorizationAPI from '@/apis/authorization';
    import { Toast } from '@/utils/helpers';
    import { useRouter } from 'vue-router';

    const account = ref('');
    const password = ref('');

    async function handleSubmit() {
      try {
        
        
        if (!this.email || !this.password) {
        Toast.fire({
          icon: 'warning',
          title: '請填入 email 和 password'
        })
        return
      }
        const response = await authorizationAPI.SignIn({
          account: account.value,
          password: password.value
        });
        
        const { data } = response;
        // Assuming the API response contains a 'token' property
        if (data && data.token) {
          // Save the token in localStorage
          localStorage.setItem('token', data.token);
          // Redirect to the restaurant homepage upon successful login
          // Make sure to import the $router object in the template part of the Vue component.
          useRouter.push('/');
        } else {
          console.error('Invalid API response:', data);
          // Handle the case when the API response doesn't contain the expected token
        }
      } catch (error) {
        console.error('Error occurred during login:', error);
        // Handle errors that may occur during the API request
      }
    }
</script>





<template>
  <div class="container py-5">
    <form  @submit="handleSubmit"  class="w-100">
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