<script setup>
import PeopleList from '../components/PeopleList.vue';
import { useFillPeopleList } from '../components/composable/fillsListWithAllPeople';

// import {computed} from "vue"
function lool() {
    // Denne funksjonen velger id fra en person og putter det i personen som redigeres eller lages
    console.log("funker")
}

</script>
<template>
    <PeopleList :goTo="'/edit-person'" :parentFunction="lool">
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