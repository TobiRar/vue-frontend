import { ref } from "vue";

// Global
const Person = ref(null);

export function usePerson() {
  return Person;
}
