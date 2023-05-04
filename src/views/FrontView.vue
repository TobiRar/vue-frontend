<script setup>
import PeopleList from '../components/PeopleList.vue';
import Header from '../components/MainHeader.vue';
import { useFillPeopleList } from '../components/composable/fillsListWithAllPeople';

// import {computed} from "vue"
useFillPeopleList()


</script>
<template>
    <Header />
    <PeopleList></PeopleList>
</template>
<style></style>