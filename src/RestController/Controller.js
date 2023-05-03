async function getPeople() {
  const response = await fetch("https://localhost:7147/all");
  const jsonData = await response.json();
  return jsonData;

  /*   fetch("https://localhost:7147/all")
    .then((res) => res.json())
    .then((res) => console.log(res)); */
}

let list = await getPeople();
console.log(list, " Test");
export { getPeople };
