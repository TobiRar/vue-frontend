async function getPeople() {
    const response = await fetch("https://localhost:7147/all",{
        mode: "no-cors",
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
    });
    const jsonData = await response.json();
    console.log(jsonData);
  }
export {getPeople}