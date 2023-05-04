import {ref, onMounted} from "vue"
import { getPeople } from "../../RestController/Controller"
import { usePeopleList } from "../../Store/listOfPeopleStore"

const listOfPepole = usePeopleList()

export function useFillPeopleList() {
    console.log(listOfPepole)
    onMounted(async () => {
        if (!listOfPepole.value) {
            listOfPepole.value = await getPeople()
        }
    })
    return listOfPepole
}

