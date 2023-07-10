import { defineConfig } from "vite";
import Unimport from 'unimport/unplugin'
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Unimport.vite({
      imports: [
        {
          name: 'fetch',
          from: 'ofetch',
          as: '$fetch'
        }
      ]
    })
  ],
});
