<script setup>
    // import {defineProps} from "vue"

</script>
<template>
    <div class="header-container">
        <button id="addPersonButton">Legg til person</button>
        <div>
            <input type="text" placeholder="Søk etter person...">
            <button class="submitSearch"></button>
        </div>
    </div>
</template>
<style>
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
</style>