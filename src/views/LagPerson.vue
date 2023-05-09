<template>
  <back-header></back-header>
  <person-form :parentFunction="createPerson"><template v-slot:editOrCreate>Lage</template></person-form>
</template>
<script setup>
import BackHeader from "@/components/BackHeader.vue";
import PersonForm from "@/components/PersonForm.vue";
import { createPerson } from "../RestController/Controller";


</script>

<style>


body {
  background-color: rgb(38, 66, 58);
  font: inherit;
}
</style>