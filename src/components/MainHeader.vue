<script setup>
// import { MdPersonsearch } from "oh-vue-icons/icons";
//     import {defineProps, watch} from "vue";
import { searchPerson } from "../RestController/Controller.js"
import { watch, ref } from "vue"
import { useRouter } from "vue-router";
import { clearPerson } from "../components/composable/ClearPerson.js"
import VueFeather from 'vue-feather';
// import { FaSearch } from "oh-vue-icons/icons";
// import OhVueIcon from "oh-vue-icons";
const search = ref("")
const check = ref(false)
const router = useRouter()

watch(search, () => {
    console.log(search.value)
    if (search.value == "Jimmy Olsen") {
        check.value = true
        console.log(check.value)
        router.push("/EasterEgg")
       
 }
    

})



function goToAddPersonView() {
    clearPerson()
    router.push("/LagPerson")
}

    // function splitSearch() {

    // }
</script>
<template>
    <div class="header-container">
        <button @click="goToAddPersonView" id="addPersonButton">Legg til person</button>
        <div id="searchPerson">
            <input v-model="search" type="text" placeholder="Søk etter person...">
            <button @click="searchPerson(search)" id="submitSearch"><vue-feather type="search" size="10px" stroke-width="4"></vue-feather></button>
        </div>
    </div>
</template>
<style scoped>
.header-container {
    display: flex;
    flex-direction: row;
    width: 50%;
    justify-content: center;
    align-items: center;
    column-gap: 50px;
    margin-top: 30px;
}

.searchPerson input:focus {
    outline: none;
}

#addPersonButton {
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bolder;
    color: rgb(38, 66, 58);
    padding: 5px 8px;
    height: 35px;
    background-color: rgb(90, 234, 146);
    border: 1px solid rgb(90, 234, 146);
    border-radius: 12px;
    cursor: pointer;
}

#searchPerson {
    position: relative;
    display: inline-block;
    width: 30%;
}

#submitSearch {
    background: rgb(90, 234, 146);
    color: rgb(38, 66, 58);
    border: 0;
    border-radius: 12px;
    padding: 5px 10px 5px 10px;
    position: absolute;
    right: 5px;
    top: 5px;
    cursor: pointer;
}

#searchPerson input {
    border: 0;
    border-radius: 12px;
    padding: 5px 20px 5px 15px;
    width: 100%;
    outline: none;
    height: 35px;
}
</style>