import { usePeopleList } from "../Store/listOfPeopleStore";
import { usePerson } from "../Store/personStore";

async function getPeople() {
  const response = await fetch("https://localhost:7147/all");
  const jsonData = await response.json();
  return jsonData;
}

async function deleteById(id) {
  const response = await fetch("https://localhost:7147/" + id, {
    method: "DELETE",
  });
  if(response.status === 500) {
    alert("Du kan ikke slette en forelder!")
    console.log(response)
  }
  // response.then(location.reload());
}

async function searchPerson(name) {
  const newPeopleList = usePeopleList();
  let trimmedName = name.trim(); // Fjerner whitespace " " fra begynnelsen og slutten av name
  const splitName = trimmedName.split(" ");
  const lastName = splitName.splice(-1); // Forander splitName arrayet
  let firstName = splitName.join(" ");

  if (!firstName) {
    firstName = lastName;
  }
  console.log(firstName);

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
  });
  await errorHandler(response, callback);
}

async function errorHandler(response, callback) {
  if (!response.ok) {
    const jsondata = await response.json();
    console.log(jsondata);
    if (jsondata["detail"] === "sameparent") {
      alert("Du kan ikke ha samme parent");
    } else {
      alert("Du kan ikke ha deg selv som forelder din gjøk! \n Tulling ass");
    }
    // if(response. === "deleteparent") {
    //   alert("Du kan ikke slette en forelder")
    // }
    else {
      alert("Du kan ikke ha deg selv som forelder din gjøk! \n Tulling ass")
    }
    return
  }
  callback();
}

async function editPerson(callback) {
  const Person = usePerson();
  const response = await fetch("https://localhost:7147/updatePerson", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(Person.Person),
  });
  //const responseText = await response.text();
  errorHandler(response, callback);
  // .then(response => response.json())
  // .then(data => console.log(data))
  // .catch((e) => {console.log(e)
}

export { getPeople, searchPerson, deleteById, createPerson, editPerson };
