<template>
  <header>
    <div>
      <standard-button @click="router.back()">Tilbake</standard-button>
    </div>
  </header>
</template>

<script setup>
import {useRouter} from "vue-router";
import StandardButton from "@/components/UI/StandardButton.vue";

const router = useRouter()
</script>

<style scoped>
  header {
    background-color: rgb(38, 66, 58);
    justify-content: left;
  }

</style>