<script setup>
import PeopleList from '../components/PeopleList.vue';
import Header from '../components/MainHeader.vue';
import { useFillPeopleList } from '../components/composable/fillsListWithAllPeople';

// import {computed} from "vue"
useFillPeopleList()


</script>
<template>
    <PeopleList>
        <template v-slot:selectBtn>
            </template>

            <template v-slot:deleteBtnHead>
                <th></th></template>
        <template v-slot:selectX>
            <button 
            @click="() => { $router.push('/edit-person'); selectedPerson(person) }">Velg</button>
        </template>
        <template v-slot:deleteBtn></template>
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