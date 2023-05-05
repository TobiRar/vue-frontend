<script setup>
import { RouterView } from 'vue-router'
import { RouterLink } from 'vue-router'
import { clearPerson } from './components/composable/ClearPerson';
clearPerson()
</script>

<template>
  <nav>
    <router-link to="/">Front page</router-link>
  </nav>
  <RouterView />
</template>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

body {
  background-color: rgb(38, 66, 58);
  font-family: Arial, Helvetica, sans-serif;
}
</style>
