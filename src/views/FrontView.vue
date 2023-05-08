<script setup>
import PeopleList from '../components/PeopleList.vue';
import Header from '../components/MainHeader.vue';
import { useFillPeopleList } from '../components/composable/fillsListWithAllPeople';
import { selectedPerson } from '../components/composable/selectedPerson';
import { usePeopleList } from "../Store/listOfPeopleStore.js";
import {deleteById} from "../RestController/Controller.js"
useFillPeopleList()


</script>
<template>
    <Header />
    <PeopleList :goTo="'/edit-person'" :parentFunction="selectedPerson" :parentFunction2="deleteById">
        <template v-slot:selectBtn></template>
        deleteBtnHead
        <template v-slot:selectX>Velg
        </template>
        <template v-slot:deleteBtnHead>
            <th>Slett</th>
        </template>
        <template v-slot:selectY>Slett</template>
    </PeopleList>
</template>
<style scoped>
body {
    background-color: rgb(38, 66, 58);
    font-family: Arial, Helvetica, sans-serif;
}

.table {
    margin: 2%;
    background-color: rgb(219, 203, 195);
    font-family: Arial, Helvetica, sans-serif;
    color: rgb(38, 66, 58);
    width: 100%;
    padding-top: 1%;
    padding-bottom: 1%;
}

.table tr:hover {
    background-color: rgb(204, 188, 180, .4);
}

.table th,
td {
    padding: 8px;
    text-align: left;
}

.table th {
    background-color: rgb(204, 188, 180);
    font-size: 20px;
}

.table button {
    background-color: rgb(90, 234, 146);
    color: rgb(38, 66, 58);
    border: 1px solid rgb(90, 234, 146);
    border-radius: 12px;
    padding: 2px 6px;
    cursor: pointer;
}
</style>