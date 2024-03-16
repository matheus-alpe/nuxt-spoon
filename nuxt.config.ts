// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  runtimeConfig: {
    spoonacular: {
      apiURL: "", //will be overwritten by the env var NUXT_SPOONACULAR_API_URL
    },
  },

  $development: {
    nitro: {
      storage: {
        recipes: {
          driver: "fs",
          base: ".cache",
        },
      },
    },
  },
});
