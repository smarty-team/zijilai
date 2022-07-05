import { defineConfig } from 'vite'
import path from 'path'
import Vue from '@vitejs/plugin-vue'
import Unocss from "unocss/vite";
import { presetUno, presetAttributify, presetIcons } from "unocss";
import Pages from 'vite-plugin-pages'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

export default defineConfig({
    resolve: {
        alias: {
            '~/': `${path.resolve(__dirname, 'src')}/`,
        },
    },
    plugins: [
        AutoImport({
            imports: [
                'vue',
                'vue-router',
                // 'vue-i18n',
                // '@vueuse/head',
                // '@vueuse/core',
            ],
            dts: 'src/auto-imports.d.ts',
        }),
        Components({
            // allow auto load markdown components under `./src/components/`
            extensions: ['vue', 'md'],
            // allow auto import and register components used in markdown
            include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
            dts: 'src/components.d.ts',
        }),
        Vue({
            include: [/\.vue$/]
        }),
        Unocss({
            presets: [presetUno(), presetAttributify(), presetIcons()],
        }),
        Pages({
            extensions: ['vue', 'md'],
        }),

    ]

})
