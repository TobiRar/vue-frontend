<script setup>
import PeopleList from '../components/PeopleList.vue';
import Header from '../components/MainHeader.vue';
import { useFillPeopleList } from '../components/composable/fillsListWithAllPeople';

// import {computed} from "vue"
useFillPeopleList()


</script>
<template>
    <Header />
    <PeopleList>
        <template v-slot:deleteBtnHead>Delete</template>
        <template v-slot:deleteBtn><button @click="deleteById(person.id)">Slett</button></template>
    </PeopleList>
</template>
<style></style>