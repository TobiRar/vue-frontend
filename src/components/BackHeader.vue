<template>
  <header>
    <button>Tilbake</button>
  </header>
</template>

<script>
export default {
  name: "BackHeader"
}
</script>

<style scoped>
  header {
    background-color: rgb(38, 66, 58);
    justify-content: left;
  }
  button {
    background-color: rgb(90, 234, 146);
    color: rgb(38, 66, 58);
    font-weight: bolder;
    border: 1px solid rgb(90, 234, 146);
    border-radius: 12px;
    padding: 4px 12px;
    margin: 20px;
    cursor: pointer;
  }
</style>