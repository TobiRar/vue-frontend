<script setup>
import { usePeopleList } from "../Store/listOfPeopleStore.js";

const listOfPepole = usePeopleList()
console.log(listOfPepole)

// eslint-disable-next-line no-unused-vars
const props = defineProps(['parentFunction', 'goTo', 'parentFunction2'])

</script>

<template>


    <table class="table">
        <tr>
            <th>Fornavn</th>
            <th>Etternavn</th>
            <th>Gatenavn</th>
            <th>Nummer</th>
            <th>By</th>
            <slot name="selectBtn">
                <th>Velg</th>
            </slot>
            <slot v-if="parentFunction2" name="deleteBtnHead" >
                <th></th>
            </slot>

        </tr>
        <tr v-for="person in listOfPepole" :key="person.id"> <!-- v-if her-->
            <td>{{ person.firstName }}</td>
            <td>{{ person.lastName }}</td>
            <td>{{ person.streetName }}</td>
            <td>{{ person.number }}</td>
            <td>{{ person.city }}</td>
            <td>
                <button @click="() => { $router.push(goTo); parentFunction(person) }">
                    <slot name="selectX"></slot>
                </button>
                <!-- <slot name="selectX" @click="selectedPerson.value = person"></slot> -->
            </td>
            <td v-if="parentFunction2">
                <button @click=" parentFunction2(person.id)">
                    <slot name="selectY"></slot>
                </button>
            </td>
        </tr>

    </table>
    <!-- <li>Lag en table med personer inne i her</li>
    <li>Og tables</li> -->
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