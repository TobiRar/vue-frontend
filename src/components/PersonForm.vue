<template>
  <h2 id="lag_person_overskrift">Endre person</h2>
  <form @submit.prevent="submitForm">
    <div class="form-control">
      <label for="first-name">Fornavn</label>
      <input id="first-name" name="first-name" type="text" v-model.trim="firstName"/>
    </div>
    <div class="form-control">
      <label for="age">Alder</label>
      <input id="age" name="age" type="number" v-model.trim="age"/>
    </div>
    <div class="form-control">
      <label for="street-name">Gatenavn</label>
      <input id="street-name" name="street-name" type="text" v-model.trim="streetName"/>
    </div>
    <div class="form-control">
      <label for="post-number">Postnummer</label>
      <input id="post-number" name="post-number" type="number" v-model.trim="postNumber"/>
    </div>
    <div class="form-control">
      <label for="country">Land</label>
      <input id="country" name="country" type="text" v-model.trim="country"/>
    </div>
    <div class="form-control">
      <label for="mom">Mor</label>
      <input id="mom" name="mom" type="text" placeholder="Søk etter mor..." v-model="mom"/>
      <button type="button">Søk</button>
    </div>
    <div class="form-control">
      <label for="last-name">Etternavn</label>
      <input id="last-name" name="last-name" type="text" v-model.trim="lastName"/>
    </div>
    <div class="form-control">
      <label for="birth-date">Fødselsdato</label>
      <input id="birth-date" name="birth-date" type="date" v-model="birthDate"/>
    </div>
    <div class="form-control">
      <label for="street-number">Gatenummer</label>
      <input id="street-number" name="street-nunmber" type="number" v-model.trim="streetNumber"/>
    </div>
    <div class="form-control">
      <label for="city">By</label>
      <input id="city" name="city" type="text" v-model.trim="city"/>
    </div>
    <div class="form-control">
      <label for="head-radius">Hoderadius</label>
      <input id="head-radius" name="head-radius" type="number" v-model.trim="headRadius"/>
    </div>
    <div class="form-control">
      <label for="dad">Far</label>
      <input id="dad" name="dad" type="text" placeholder="Søk etter far..." v-model="dad"/>
      <button @click="goToAddPersonView"  type="button">Søk</button>
    </div>
    <div>
      <button>Lagre</button>
    </div>
  </form>
</template>

<script setup>
  import { ref } from 'vue' ;
  import { useRouter } from 'vue-router';
  import {personstore} from "../Store/personStore"
  const pers = personstore()
  pers.person 

  const route = useRouter()

  const firstName = ref('');
  const age = ref(null);
  const streetName = ref('');
  const postNumber = ref(null);
  const country = ref('');
  const mom = ref('');
  const lastName = ref('');
  const birthDate = ref(null);
  const streetNumber = ref(null);
  const city = ref('');
  const headRadius = ref(null);
  const dad = ref('');


 function submitForm() {
    console.log('Fornavn: ' + this.firstName);
    this.firstName = '';
}

function goToAddPersonView() {
        route.push("/select-parent")
    }


// export default {
//   name: "PersonForm"
// }
</script>

<style scoped>
/*#lag_person_overskrift {*/
/*  grid-area: header;*/
/*}*/

/*#input_container_1 {*/
/*  grid-area: side;*/
/*  width: 100%;*/
/*  padding: 0;*/
/*  margin:0;*/
/*}*/

/*#input_container_2 {*/
/*  grid-area: footer;*/
/*  width: 100%;*/
/*  padding: 0;*/
/*  margin:0;*/
/*}*/

/*#edit_or_create_person_container {*/
/*  justify-content: center;*/
/*  background-color: rgb(38, 66, 58);*/
/*  color: rgb(255, 255, 255);*/
/*  display: grid;*/
/*  grid-template-columns: 100px 100px 50px 100px 100px;*/
/*  grid-template-rows: auto;*/
/*  grid-template-areas:*/
/*        "header header header header ."*/
/*        "side side . footer footer";*/
/*}*/

/*#lag_person_overskrift {*/
/*  color: rgb(255, 255, 255);*/
/*}*/


/*#lag_person_overskrift {*/
/*  grid-area: header;*/
/*}*/

/*#input_container_1 {*/
/*  grid-area: side;*/
/*}*/
/*#input_container_2 {*/
/*  grid-area: footer;*/
/*}*/

/*#edit_or_create_person_container {*/
/*  background-color: rgb(38, 66, 58);*/
/*  color: rgb(255, 255, 255);*/
/*}*/

/*#input_field {*/
/*  display: block;*/
/*}*/

/*#input_field p {*/
/*  margin-bottom: 1px;*/
/*  font-size: 12px;*/
/*}*/

/*#input_field input {*/
/*  border: 0;*/
/*  border-radius: 12px;*/
/*  padding: 5px 20px 5px 15px;*/
/*  outline: none;*/
/*  margin-top: 0;*/
/*  width: 100%;*/
/*}*/

/*#parent_search_input {*/
/*  position: relative;*/
/*  display: inline-block;*/
/*  width: 100%;*/
/*}*/

/*#parent_search_input input {*/
/*  border: 0;*/
/*  border-radius: 12px;*/
/*  padding: 5px 20px 5px 15px;*/
/*  outline: none;*/
/*  margin-top: 0;*/
/*  width: 100%;*/
/*}*/

/*#parent_search_input input:focus {*/
/*  outline: none;*/
/*}*/

/*#parent_search_input button {*/
/*  background-color: rgb(90, 234, 146);*/
/*  color: rgb(38, 66, 58);*/
/*  border: 1px solid rgb(90, 234, 146);*/
/*  border-radius: 12px;*/
/*  padding: 1px 6px;*/
/*  right: 2px;*/
/*  top: 3px;*/
/*  position: absolute;*/
/*  cursor: pointer;*/
/*}*/
/*#button_div {*/
/*  display: flex;*/
/*  justify-content: center;*/
/*  margin-top: 30px;*/
/*}*/

/*#lag_person_button {*/
/*  font-weight: bolder;*/
/*  background-color: rgb(90, 234, 146);*/
/*  color: rgb(38, 66, 58);*/
/*  border: 1px solid rgb(90, 234, 146);*/
/*  border-radius: 12px;*/
/*  padding: 4px 12px;*/
/*  cursor: pointer;*/
/*}*/
</style>