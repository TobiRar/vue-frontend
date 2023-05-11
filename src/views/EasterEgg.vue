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
    <button @click="audio.pause()"></button>
   </div> 
</template>