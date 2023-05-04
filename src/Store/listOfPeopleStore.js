import { ref } from "vue"
const listOfPepole = ref(null)

export function usePeopleList(){
    return listOfPepole
}