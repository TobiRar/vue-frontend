
function getPeople() {
  fetch('https://localhost:7147/all')
  
  .then(response => response.json())
  .then((json) => {
    return json.data
  })
}
export {getPeople}
