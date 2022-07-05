import { defineConfig } from 'vite'
import path from 'path'
import Vue from '@vitejs/plugin-vue'

export default defineConfig({
    resolve: {
        alias: {
            '~/': `${path.resolve(__dirname, 'src')}/`,
        },
    },
    plugins: [
        Vue({
            include: [/\.vue$/]
        })
    ]

})
