import { defineConfig } from 'vite'

export default defineConfig({
    test: {
        environment: 'happy-dom',
        setupFiles: ['setupFile.ts'],
        watch: false
    },
})