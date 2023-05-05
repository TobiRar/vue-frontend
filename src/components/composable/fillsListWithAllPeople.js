import { onMounted } from "vue"
import { getPeople } from "../../RestController/Controller"
import { usePeopleList } from "../../Store/listOfPeopleStore"

const listOfPepole = usePeopleList()

export function useFillPeopleList() {
    console.log(listOfPepole)
    onMounted(async () => {
            listOfPepole.value = await getPeople()
    })
    return listOfPepole
}

