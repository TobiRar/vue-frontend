import { usePeopleList } from "../Store/listOfPeopleStore";

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

async function searchPerson() {
  const newPeopleList = usePeopleList()
  const firstName = "Halvor"
  const lastName = "Bakke"
const response = await fetch(`https://localhost:7147/getparents?firstName=${firstName}&lastName=${lastName}`)
const jsonData = await response.json()
 newPeopleList.value = jsonData
console.log(jsonData)
}
export { getPeople, searchPerson, deleteById };