import type { Recipe } from "~/spoonacular";

export default defineCachedEventHandler(
  async (event) => {
    const data = await $fetch<{
      recipes: Recipe[];
    }>("https://api.spoonacular.com/recipes/random", {
      query: {
        limitLicense: true,
        number: 100,
        apiKey: useRuntimeConfig().spoonacular.apiURL,
      },
    });

    return data.recipes;
  },
  {
    base: "recipes",
    getKey: () => 'recipes',
    shouldBypassCache: () => false,
    maxAge: 1000 * 60 * 60 * 24,
    staleMaxAge: 1000 * 60 * 60 * 24,
  }
);
