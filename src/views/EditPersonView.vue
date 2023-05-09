<template>
  <back-header></back-header>
  <person-form :parentFunction="editPerson" ><template v-slot:editOrCreate>Rediger</template></person-form>
</template>

<script setup>
  // import { ref } from 'vue';
  import BackHeader from "@/components/BackHeader.vue";
  import PersonForm from "@/components/PersonForm.vue";
  import { editPerson } from "../RestController/Controller";


  
</script>

<style>

</style>