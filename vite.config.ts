import { defineConfig } from 'vite'

export default defineConfig({
    test: {
        environment: 'happy-dom',
        poolOptions: {
            threads: {
                isolate: false,
                maxThreads: 1,
                minThreads: 1,
            }
        },
        setupFiles: ['setupFile.ts'],
        watch: false
    },
})