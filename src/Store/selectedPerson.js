import { ref } from "vue";

const selectedPerson = ref(null);

function useSelectedPerson() {
  return selectedPerson;
}

const selectedParent = ref("")

function useSelectedParent(){
  return selectedParent;
}

export {useSelectedPerson, useSelectedParent}
