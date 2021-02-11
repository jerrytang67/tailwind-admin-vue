import { createApp } from 'vue'
import App from './App.vue'

// STYLES
import '@css/tailwind.scss'

//  ROUTE
import { createRouter, createWebHistory } from "vue-router";

// VUEX
import { store, key } from './store'

import { devtools } from './devtools';

//COMPONENTS
import Layout from "@layouts/layout.vue";
import HomePage from "@views/home/home.vue";

const routes = [
    { path: '/', redirect: { name: 'Home' } },
    {
        path: '/dashboard', component: Layout, children: [
            { path: '/', redirect: { name: 'Home' } },
            { path: 'home', name: 'Home', component: HomePage }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

const app = createApp(App);

app
    .use(devtools)
    .use(router)
    .use(store, key) // pass the injection key
    .mount('#app')
