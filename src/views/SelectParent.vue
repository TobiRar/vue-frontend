<script setup>
import PeopleList from '../components/PeopleList.vue';
import {getPersonStatsById} from "../components/composable/SavePerson.js"


</script>
<template>
        <PeopleList :goTo="'/edit-person'" :parentFunction="getPersonStatsById"> 
            <template v-slot:selectX>Velg
            </template>
        </PeopleList>
</template>
<style scoped>
 button {
    background-color: rgb(90, 234, 146);
    color: rgb(38, 66, 58);
    border: 1px solid rgb(90, 234, 146);
    border-radius: 12px;
    padding: 2px 6px;
    cursor: pointer;
}
</style>