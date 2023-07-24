import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import './assets/main.css'

import { createApp } from 'vue'
// import { ref, watchEffect } from 'vue';
// import { useRoute } from 'vue-router';
import App from './App.vue'
import router from './router'

const app = createApp(App)
// const currentRoute = ref('');

// watchEffect(() => {
//   const route = useRoute();
//   currentRoute.value = route.path;
// });

app.use(router)

app.mount('#app')

