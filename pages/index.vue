<script setup lang="ts">
const { data, pending, error, refresh } = await useFetch("/api/recipes");
</script>

<template>
  <div>
    <div v-for="recipe in data">
      {{ recipe.title }}
      <pre v-html="recipe.instructions"></pre>
      <img :src="recipe.image" alt="img" />
    </div>
  </div>
</template>
