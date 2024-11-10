<template>
  <div class="text-center">
    <h1 class="text-4xl font-bold tracking-tighter sm:text-5xl">Bienvenido a nuestro sitio web</h1>
    <p class="mx-auto max-w-[600px] text-gray-500 md:text-xl">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
    <hr />
    <p class="mt-5 text-red-500 underline font-bold">Counter: {{ counter }}</p>
    <button class="bg-blue-500 text-white text-center p-2 rounded mt-3" @click="counter++">
      +1
    </button>
  </div>
</template>

<script lang="ts" src="./HomePage.ts"></script>
