import { usePerson } from "../../Store/personStore";
import Person from "../../Models/Person";

export function clearPerson() {
  const pers = usePerson();
  pers.Person = new Person({});
  console.log(pers + " Pers");
  console.log(pers);
}
