async function getPeople() {
  const response = await fetch("https://localhost:7147/all");
  const jsonData = await response.json();
  return jsonData;
}

export { getPeople };
