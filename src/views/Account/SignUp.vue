<script setup>
import { Form, Field } from 'vee-validate';
import * as Yup from 'yup';




const schema = Yup.object().shape({
    firstName: Yup.string()
        .required('First Name is required'),
    lastName: Yup.string()
        .required('Last Name is required'),
    username: Yup.string()
        .required('Username is required'),
    password: Yup.string()
        .required('Password is required')
        .min(6, 'Password must be at least 6 characters')
});

</script>

<template>
    <div class="card m-3">
        <div class="card-body">
            <h4 class="card-header">註冊Herstory</h4>
            <Form @submit="onSubmit" :validation-schema="schema" v-slot="{ errors, isSubmitting }">
                <div class="form-group">
                    <label>Name</label>
                    <Field name="name" type="text" class="form-control" :class="{ 'is-invalid': errors.name }" />
                    <div class="invalid-feedback">{{ errors.firstName }}</div>
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <Field name="email" type="text" class="form-control" :class="{ 'is-invalid': errors.email }" />
                    <div class="invalid-feedback">{{ errors.email }}</div>
                </div>
                <div class="form-group">
                    <label>Account</label>
                    <Field name="account" type="text" class="form-control" :class="{ 'is-invalid': errors.account }" />
                    <div class="invalid-feedback">{{ errors.account }}</div>
                </div>
                <div class="form-group">
                    <label>Password</label>
                    <Field name="password" type="password" class="form-control" :class="{ 'is-invalid': errors.password }" />
                    <div class="invalid-feedback">{{ errors.password }}</div>
                </div>
                <div class="form-group">
                    <button class="btn subbtn btn-primary" :disabled="isSubmitting">
                        <span v-show="isSubmitting" class="spinner-border spinner-border-sm mr-1"></span>
                        Register
                    </button>
                    <router-link to="login" class="btn btn-link">Cancel</router-link>
                </div>
            </Form>
        </div>
    </div>
</template>

<style>
    .card {
        width: 500px;
        margin: 0 auto;
    }
    .card-header {
        text-align: center;
        background: #ffffff;
    }

    .form-group {
        margin: 0 auto;
        width: 100%;
        padding: 2vw;
    }
    .n-image {
        width: 100%;
        height: 50%; /* To maintain the aspect ratio of the image */
    }
    .label {
        font-size: 20px;
    }
    .btn.subbtn {
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