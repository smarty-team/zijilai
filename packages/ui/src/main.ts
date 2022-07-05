// const str: string = 'Hello Vite'
// import { add } from './add'
// console.log('str', str)
// document.querySelector('#app')!.innerHTML = str + add

import { createApp, h } from "vue";
// const App = {
//     render() {
//         return h("div", null, [h("div", null, String("Hello Vue"))]);
//     },
// };
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'
const pinia = createPinia()

import App from './App.vue'
const app = createApp(App)
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: () => import('~/pages/index.vue') }
    ]
})
app.use(router)
app.use(pinia)
app.mount("#app");


