import adapter from "@sveltejs/adapter-static";
import sveltePreprocess from "svelte-preprocess";

const base = process.env.GITHUB_PAGES ? "/escape-games" : "";

export default {
  preprocess: sveltePreprocess(),
  kit: {
    adapter: adapter({
      pages: "dist",
      assets: "dist",
      fallback: null,
    }),
    paths: {
      base,
    },
  },
};
