import { usePerson } from "../../Store/personStore";
import { useSelectedParent } from "../../Store/selectedPerson";

const parent = useSelectedParent()
 export function getPersonStatsById() {
     const pers = usePerson()
    if(parent.value === "dad") {
        pers.Person.dadId = parent.id
        console.log(pers.Person.dadId)
        console.log(pers.Person)
        return
    }
    pers.Person.momId = parent.id
    console.log(pers.Person.momId)
}