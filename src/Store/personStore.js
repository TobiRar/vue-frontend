import person from "../Models/Person.js";
import { ref } from "vue";
// a function to create a person

const globalPerson = ref(null);

export function usePerson(_person = null) {
  if (_person !== null) {
    globalPerson.value = new person(_person);
  }
  /* const localPerson = ref(new person(_person)); */
  console.log(globalPerson.value);
  return {
    /*  localPerson, */
    globalPerson,
  };
}
