<template>
  <button>
    <slot></slot>
  </button>
</template>

<style scoped>
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