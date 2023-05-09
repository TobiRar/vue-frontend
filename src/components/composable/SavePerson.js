import { usePerson } from "../../Store/personStore";
import { useSelectedParent } from "../../Store/selectedPerson";

const parent = useSelectedParent();
export function getPersonStatsById(person) {
  const pers = usePerson();
  console.log(parent);
  if (parent.value === "dad") {
    pers.Person.dadId = person.id;
    console.log(pers.Person.dadId);
    console.log(pers.Person);
    return;
  }
  pers.Person.momId = person.id;
  console.log(pers.Person.momId);
}
