<template>
  <back-header></back-header>
  <person-form :parentFunction="PUTfunction">
    <template v-slot: editAndDeleteHeader>Rediger person
    </template>
  </person-form>
</template>

<script setup>
  // import { ref } from 'vue';
  import BackHeader from "@/components/BackHeader.vue";
  import PersonForm from "@/components/PersonForm.vue";

  //imoport put function :parntfunction="PUTfunction"
  function PUTfunction(){
  console.log("bytt ut meg senere")
}

  
</script>

<style>

</style>