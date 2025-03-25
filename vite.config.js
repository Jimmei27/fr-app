import { defineConfig } from 'vitest/config';
import path from 'path';
import { fileURLToPath } from 'url';
import react from '@vitejs/plugin-react';
var __filename = fileURLToPath(import.meta.url);
var __dirname = path.dirname(__filename);
export default defineConfig({
    plugins: [react()],
    build: {
        outDir: 'build', // Ensure this is pointing to the right directory
    },
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './vitest.setup.ts',
    },
    resolve: {
        alias: {
            '~/': path.join(__dirname, 'src/'),
        },
    },
});
