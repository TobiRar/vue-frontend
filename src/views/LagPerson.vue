<template>
  <back-header></back-header>
  <person-form :parntfunction="POSTfunction"></person-form>
</template>
<script setup>
import BackHeader from "@/components/BackHeader.vue";
import PersonForm from "@/components/PersonForm.vue";
</script>

<style>


body {
  background-color: rgb(38, 66, 58);
  font: inherit;
}
</style>