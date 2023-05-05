import { usePerson } from "../../Store/personStore.js";
import PersonClass from "/src/Models/Person.js";

export function selectedPerson(person) {
  const pers = usePerson();
  pers.Person = new PersonClass(person);
  console.log(pers.Person);
}
