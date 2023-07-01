import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import dotenv from "dotenv";

// https://vitejs.dev/config/

dotenv.config();
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  console.log("appid >>", env.APP_ID);
  return {
    plugins: [react(), tsconfigPaths()],
    define: {
      "process.env.APP_ID": env.APP_ID,
    },
    server: {
      port: 3000,
    },
  };
});
