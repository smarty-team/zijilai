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
// import { createPinia } from 'pinia'
// const pinia = createPinia()
import "uno.css";
import App from './App.vue'
import routes from "~pages";
const app = createApp(App)
const router = createRouter({
    history: createWebHistory(),
    routes
    // routes: [
    //     { path: '/', component: () => import('~/pages/index.vue') },
    //     { path: '/login', component: () => import('~/pages/login.vue') }
    // ]
})
app.use(router)
// app.use(pinia)
Object.values(import.meta.globEager("./modules/*.ts")).forEach((i) =>
    i.install?.({ app })
);


app.mount("#app");


