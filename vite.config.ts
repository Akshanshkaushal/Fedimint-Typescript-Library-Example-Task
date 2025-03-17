import { defineConfig } from 'vite'
import wasm from 'vite-plugin-wasm'
import topLevelAwait from 'vite-plugin-top-level-await'  

// https://vitejs.dev/config/
export default defineConfig({

  base: '/Fedimint-Typescript-Library-Example-Task/',

  plugins: [
    wasm(),
    topLevelAwait(),  
  ],

  worker: {
    format: 'es',
    plugins: () => [
      wasm(),
      topLevelAwait(),  
    ],
  },

  optimizeDeps: {
    exclude: ['@fedimint/core-web'],
  },
})

