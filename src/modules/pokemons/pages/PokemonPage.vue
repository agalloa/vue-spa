<template>
  <section class="flex flex-col">
    <h1 class="text-3xl font-bold">
      pokemon
      <small class="text-blue-500"> #{{ id }} </small>
    </h1>
    <img
      :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`"
      alt=""
      class="w-[200px] h-[200px] mt-5"
    />
    <RouterLink
      :to="{ name: 'pokemon', params: { id: id + 1 } }"
      class="bg-blue-500 text-white p-2 rounded text-center"
    >
      Siguiente
    </RouterLink>
  </section>
</template>

<script setup lang="ts">
interface Props {
  id: number;
}

const props = defineProps<Props>();
</script>
