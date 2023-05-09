<template>
  <back-header></back-header>
  <person-form :parentFunction="POSTfunction"></person-form>
</template>
<script setup>
import BackHeader from "@/components/BackHeader.vue";
import PersonForm from "@/components/PersonForm.vue";

function POSTfunction(){
  console.log("bytt meg")
}
</script>

<style>


body {
  background-color: rgb(38, 66, 58);
  font: inherit;
}
</style>