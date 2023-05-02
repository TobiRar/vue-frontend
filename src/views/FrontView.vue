<script setup>
import PeopleList from '../components/PeopleList.vue';
import Header from '../components/MainHeader.vue';
import {getPeople} from '../RestController/Controller'
function d(){
    getPeople()
}
// import {computed} from "vue"


</script>
<template>
    <Header />
    <button @click="d"></button>
    <PeopleList></PeopleList>
</template>
<style>

</style>