import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

const base = process.env.GITHUB_PAGES ? "/escape-games/" : "/";

export default defineConfig({
  plugins: [svelte()],
  base,
});
