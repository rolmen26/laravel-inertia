import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import checker from "vite-plugin-checker";
import {resolve} from 'path';
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/ts/app.tsx'],
            refresh: true,
        }),
        react(),
        checker({ typescript: true }),
    ],
    resolve: {
        alias: {
            '@': resolve(__dirname, 'resources/js'),
        },
    }
});
