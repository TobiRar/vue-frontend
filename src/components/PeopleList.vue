<script setup>
import {getPeople} from "../RestController/Controller.js"
import {ref, onMounted} from "vue"
import {useRouter} from "vue-router"

const router = useRouter()

const listOfPepole = ref(null)

function goToEditpage() {
    router.push("/Edit-Person")
}

onMounted(async () =>{
    if(!listOfPepole.value){
        listOfPepole.value = await getPeople()
    }
})

/* onMounted(() => {
    getPeople().then(data=>{
        array.value = data
    })
}) */



</script>

<template>
   <button @click="getPeople1">Trykk</button>
        <table class="table">
            <tr>
                <th>Fornavn</th>
                <th>Etternavn</th>
                <th>Gatenavn</th>
                <th>Nummer</th>
                <th>By</th>
                <th>Rediger</th>
                <th>Slett</th>
            </tr>
            <tr v-for="person in listOfPepole" :key="person.id"> <!-- v-if her-->
                <td>{{person.firstName}}</td>
                <td>{{  person.lastName}}</td>
                <td>{{person.streetName}}</td>
                <td>{{person.number}}</td>
                <td>{{person.city}}</td>
                <td>
                    <button @click="goToEditpage">Rediger</button>
                </td>
                <td>
                    <button >Slett</button>
                </td>
            </tr>

        </table>
    <!-- <li>Lag en table med personer inne i her</li>
    <li>Og tables</li> -->
</template>

<style scoped>
body  {
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
.table th, td {
    padding:  8px;
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