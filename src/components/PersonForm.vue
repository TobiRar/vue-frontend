<template>
  <section id="edit_or_create_person_container">

    <h2 id="lag_person_overskrift">Endre person</h2>

    <div id="input_container_1">

      <div id="input_field">
        <p>Fornavn</p>
        <input class="inputField" type="text" >
      </div>

      <div id="input_field">
        <p>Alder</p>
        <input class="inputField" type="number">
      </div>

      <div id="input_field">
        <p>Gatenavn</p>
        <input class="inputField adress" type="text">
      </div>

      <div id="input_field">
        <p>Postnummer</p>
        <input class="inputField" type="number">
      </div>

      <div id="input_field">
        <p>Land</p>
        <input class="inputField" type="text">
      </div>

      <div id="input_field">
        <p>Mor</p>
        <div id="parent_search_input">
          <input class="inputField" type="text" placeholder="Søk etter mor.." >
          <button>Search</button>
        </div>
      </div>

    </div>
    <div id="input_container_2">
      <div id="input_field">
        <p>Etternavn</p>
        <input class="inputField" type="text">
      </div>

      <div id="input_field">
        <p>Fødselsdato</p>
        <input class="inputField" type="date">
      </div>

      <div id="input_field">
        <p>Nummer</p>
        <input class="inputField" type="number">
      </div>

      <div id="input_field">
        <p>By</p>
        <input class="inputField" type="text">
      </div>

      <div id="input_field">
        <p>Hoderadius</p>
        <input class="inputField" type="number" >
      </div>

      <div id="input_field">
        <p>Far</p>
        <div>
          <input class="inputField" type="text" placeholder="Søk etter far.." >
          <button>Search</button>
        </div>
      </div>
    </div>

    <button>Lagre</button>
  </section>



</template>

<script>
export default {
  name: "PersonForm"
}
</script>

<style scoped>
#lag_person_overskrift {
  grid-area: header;
}

#input_container_1 {
  grid-area: side;
  width: 100%;
  padding: 0;
  margin:0;
}

#input_container_2 {
  grid-area: footer;
  width: 100%;
  padding: 0;
  margin:0;
}

#edit_or_create_person_container {
  justify-content: center;
  background-color: rgb(38, 66, 58);
  color: rgb(255, 255, 255);
  display: grid;
  grid-template-columns: 100px 100px 50px 100px 100px;
  grid-template-rows: auto;
  grid-template-areas:
        "header header header header ."
        "side side . footer footer";
}

#lag_person_overskrift {
  color: rgb(255, 255, 255);
}


#lag_person_overskrift {
  grid-area: header;
}

#input_container_1 {
  grid-area: side;
}
#input_container_2 {
  grid-area: footer;
}

#edit_or_create_person_container {
  background-color: rgb(38, 66, 58);
  color: rgb(255, 255, 255);
}

#input_field {
  display: block;
}

#input_field p {
  margin-bottom: 1px;
  font-size: 12px;
}

#input_field input {
  border: 0;
  border-radius: 12px;
  padding: 5px 20px 5px 15px;
  outline: none;
  margin-top: 0;
  width: 100%;
}

#parent_search_input {
  position: relative;
  display: inline-block;
  width: 100%;
}

#parent_search_input input {
  border: 0;
  border-radius: 12px;
  padding: 5px 20px 5px 15px;
  outline: none;
  margin-top: 0;
  width: 100%;
}

#parent_search_input input:focus {
  outline: none;
}

#parent_search_input button {
  background-color: rgb(90, 234, 146);
  color: rgb(38, 66, 58);
  border: 1px solid rgb(90, 234, 146);
  border-radius: 12px;
  padding: 1px 6px;
  right: 2px;
  top: 3px;
  position: absolute;
  cursor: pointer;
}
#button_div {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}

#lag_person_button {
  font-weight: bolder;
  background-color: rgb(90, 234, 146);
  color: rgb(38, 66, 58);
  border: 1px solid rgb(90, 234, 146);
  border-radius: 12px;
  padding: 4px 12px;
  cursor: pointer;
}
</style>