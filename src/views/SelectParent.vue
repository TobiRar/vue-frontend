<script setup>
import PeopleList from '../components/PeopleList.vue';
import BackHeader from "@/components/BackHeader.vue";

import { useRouter } from 'vue-router';
import { getPersonStatsById } from '../components/composable/SavePerson.js'
const router = useRouter()
// import {computed} from "vue"
function goBack() {
    router.back()
}

</script>
<template>
    <BackHeader></BackHeader>
    <PeopleList :goTo="goBack" :parentFunction="getPersonStatsById">
        <template v-slot:selectBtn>Velg
        </template>
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