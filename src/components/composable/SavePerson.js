import { usePerson } from "../../Store/personStore";
import { useSelectedParent } from "../../Store/selectedPerson";

const parent = useSelectedParent();
export function getPersonStatsById(person) {
  const pers = usePerson();
  console.log(parent);
  if (parent.value === "dad") {
    pers.Person.dadId = person.id;
    console.log(pers.Person.dadId);
    pers.Person.dadFirstName = person.firstName ?? "";
    pers.Person.dadLastName = person.lastName ?? "";

    return;
  }
  pers.Person.momId = person.id;
  pers.Person.momFirstName = person.firstName ?? "";
  pers.Person.momLastName = person.lastName ?? "";
  console.log(pers.Person.momId);
}
