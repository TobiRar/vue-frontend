<script setup>
    import Header from "../components/MainHeader.vue"
    import BackHeader from "../components/BackHeader.vue"
    import sound from '../Audios/superman.mp3'
    import { onUnmounted } from "vue"
    const audio = new Audio(sound)
    audio.play()
onUnmounted(()=>{
    audio.pause()
})

</script>

<template>
    <Header />
    <BackHeader />
   <div>
    <img src="../Images/MicrosoftTeams-image.png">
    <button @click="audio.pause()">Stop Halvor anthem</button>
   </div> 
</template>
<style setup>
button {
    font-style: inherit;
    font-weight: bold;
    background-color: rgb(90, 234, 146);
    color: rgb(38, 66, 58);
    border: 1px solid rgb(90, 234, 146);
    border-radius: 12px;
    padding: 2px 6px;
    cursor: pointer;
  }
</style>