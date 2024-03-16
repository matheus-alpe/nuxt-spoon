<script setup lang="ts">
// import type { InternalApi } from 'nitropack'
import type { ExtendedIngredient } from "~/spoonacular";

const { data: recipe } = await useFetch("/api/recipes", {
  transform: data => data[Math.random() * data.length | 0]
});

// const columnsToShow: Array<keyof InternalApi['/api/recipes']['get'][number]['extendedIngredients'][number]> = ['name'] // an alternative to the code below
const columnsToShow: Array<keyof ExtendedIngredient> = ["name"];

const columns = columnsToShow.map((col) => ({
  key: col,
  label: col.toUpperCase(),
}));

const metric = ref(true);
const unit = computed(() => (metric.value ? "metric" : "us"));
</script>

<template>
  <UContainer>
    <h1 class="mt-4 font-bold text-xl pt-12">{{ recipe?.title }}</h1>

    <div class="flex flex-row gap-1 mt-2">
      <UBadge v-for="label in recipe?.dishTypes" :key="label" :label="label" variant="subtle"/>
    </div>

    <section class="mt-4 flex flex-col md:flex-row-reverse gap-4 w-full">
      <NuxtImg
        :src="recipe?.image || 'not-found'"
        :alt="recipe?.title"
        class="object-cover w-full"
      />

      <p class="text-lg md:max-w-[40ch]" v-html="recipe?.summary"></p>
    </section>

    <section
      class="mt-4 flex flex-col md:flex-row justify-between md:items-start gap-5"
    >
      <div>
        <h2 class="font-semibold text-lg">Ingredients</h2>
        <UTable
          class="mt-2"
          :columns="columns"
          :rows="recipe?.extendedIngredients"
        >
          <template #name-data="{ row }">
            <span class="flex flex-row gap-2 items-center">
              <NuxtImg
                provider="spoonacular"
                :src="row.image || 'not-found'"
                :alt="`image of ${row.name}`"
                height="20"
                width="20"
              />
              {{ row.name }}
              ({{
                [row.measures[unit].amount, row.measures[unit].unitLong]
                  .filter(Boolean)
                  .join(" ")
              }})
            </span>
          </template>
        </UTable>
      </div>

      <div class="flex-1">
        <h2 class="font-semibold text-lg">Steps</h2>

        <ol class="mt-2 flex flex-col gap-4">
          <li
            v-for="{ number, step } in recipe?.analyzedInstructions[0]?.steps"
            :key="number"
            class="flex items-baseline gap-2"
          >
            <span
              class="flex-shrink-0 flex items-center justify-center rounded-full bg-primary-50 dark:bg-primary-400 dark:bg-opacity-20 text-primary-500 dark:text-primary-400 ring-1 ring-inset ring-primary-500 dark:ring-primary-400 ring-opacity-25 text-xs font-bold aspect-square h-5 w-5"
            >
              {{ number }}
            </span>
            {{ step }}
          </li>
        </ol>
      </div>
    </section>

    <section class="my-4 flex justify-center">
      <UButton external :to="recipe?.sourceUrl">View original recipe on {{ recipe?.sourceName }}</UButton>
    </section>
  </UContainer>
</template>
