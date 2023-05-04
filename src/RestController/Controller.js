import { usePeopleList } from "../Store/listOfPeopleStore";
import {ref} from "vue"
import { useSwitch } from "../Store/switch";

const Switcher = useSwitch()

async function getPeople() {
  Switcher.value = false
  const response = await fetch("https://localhost:7147/all");
  const jsonData = await response.json();
  return jsonData;
}


async function deleteById(id) {
 const response = await fetch("https://localhost:7147/"+id , {
    method: 'DELETE'
  })
  console.log(response)
  .then(location.reload());
}

async function searchPerson(name) {
  const arr = ref([])
  arr.value = name
  var splitName = arr.value.split(' ')
  splitName[0]
  const newPeopleList = usePeopleList()
  const firstName = splitName[0]
  const lastName = splitName[1]
  Switcher.value = true;
  console.log(Switcher.value)
const response = await fetch(`https://localhost:7147/getparents?firstName=${firstName}&lastName=${lastName}`)
const jsonData = await response.json()
 newPeopleList.value = jsonData
console.log(jsonData)
}
export { getPeople, searchPerson, deleteById };