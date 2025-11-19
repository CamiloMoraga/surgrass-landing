import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
    plugins: [vue()],

    resolve: {
        alias: {
            // Alias principal, apunta a /src
            '@': fileURLToPath(new URL('./src', import.meta.url)),

            // Alias secundarios útiles
            '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
            '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
            '@views': fileURLToPath(new URL('./src/views', import.meta.url)),
            '@router': fileURLToPath(new URL('./src/router', import.meta.url)),
            '@styles': fileURLToPath(new URL('./src/assets/css', import.meta.url)),
            '@img': fileURLToPath(new URL('./src/assets/img', import.meta.url)),
            '@videos': fileURLToPath(new URL('./src/assets/videos', import.meta.url)),
        },
    },

    server: {
        open: true, // abre localhost automáticamente
    },
});
