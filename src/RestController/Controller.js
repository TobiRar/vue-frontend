import { usePeopleList } from "../Store/listOfPeopleStore";
import {ref} from "vue"

async function getPeople() {
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
const response = await fetch(`https://localhost:7147/getparents?firstName=${firstName}&lastName=${lastName}`)
const jsonData = await response.json()
 newPeopleList.value = jsonData
console.log(jsonData)
}

async function createPerson(person) {
  const response = await fetch('https://localhost:7147/CreatePerson', person)
  console.log(response)
  const jsonData = await response.json()
  return jsonData
}

async function editPerson(person) {
   await fetch('https://localhost:7147/updatePerson', person)
  .then((respose) => respose.json())
  .then((json) => {
    console.log(json)
  })
  .catch((e) => {
    console.log(e)
  })
}

export { getPeople, searchPerson, deleteById, createPerson, editPerson };