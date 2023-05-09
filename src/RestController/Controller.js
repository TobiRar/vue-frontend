import { usePeopleList } from "../Store/listOfPeopleStore";
import { usePerson } from "../Store/personStore";
import { ref } from "vue";

async function getPeople() {
  const response = await fetch("https://localhost:7147/all");
  const jsonData = await response.json();
  return jsonData;
}

async function deleteById(id) {
  const response = await fetch("https://localhost:7147/" + id, {
    method: "DELETE",
  });
  response.then(location.reload());
}

async function searchPerson(name) {
  const arr = ref([]);
  arr.value = name;
  var splitName = arr.value.split(" ");
  splitName[0];
  const newPeopleList = usePeopleList();
  const firstName = splitName[0];
  const lastName = splitName[1];
  const response = await fetch(
    `https://localhost:7147/getparents?firstName=${firstName}&lastName=${lastName}`
  );
  const jsonData = await response.json();
  newPeopleList.value = jsonData;
  console.log(jsonData);
}

async function createPerson(callback) {
  const Person = usePerson();
  const response = await fetch("https://localhost:7147/CreatePerson", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(Person.Person),
  }).then(router.push("/"));
  console.log(response);
  callback();
}

async function editPerson() {
  const person = usePerson();
  await fetch("https://localhost:7147/updatePerson", person)
    .then((respose) => respose.json())
    .then((json) => {
      console.log(json);
    })
    .catch((e) => {
      console.log(e);
    });
}

export { getPeople, searchPerson, deleteById, createPerson, editPerson };
