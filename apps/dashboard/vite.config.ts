import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "MIUM_");

  return ({
    define: {
      __APP_ENV__: {
        API_HOST: env.MIUM_API_HOST ?? ""
      }
    },
    plugins: [react()],
    clearScreen: false
  });
});