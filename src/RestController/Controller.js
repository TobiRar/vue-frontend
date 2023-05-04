async function getPeople() {
  const response = await fetch("https://localhost:7147/all");
  const jsonData = await response.json();
  return jsonData;
}

export { getPeople };

async function deleteById(id) {
 const response = await fetch("https://localhost:7147/"+id , {
    method: 'DELETE'
  })
  console.log(response)
  .then(location.reload());
}
export {deleteById}

async function searchPerson(firstname, lastname) {
  // firstname.value = "Halvor"
  // lastname.value = "Bakke"
  await fetch("https://localhost:7147/getparents?firstName=${firstName}&lastName=${lastName}" , {
    method: 'GET'
  })
}
export {searchPerson}