import { ref } from "vue";

const selectedPerson = ref(null);

export function useSelectedPerson() {
  return selectedPerson;
}
