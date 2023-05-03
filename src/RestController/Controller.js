async function getPeople() {
  const response = await fetch("https://localhost:7147/all");
  const jsonData = await response.json();
  return jsonData;
}

export { getPeople };

async function deleteById(id) {
  await fetch("https://localhost:7147/"+id , {
    method: 'DELETE'
  })
  .then(location.reload());
}
export {deleteById}