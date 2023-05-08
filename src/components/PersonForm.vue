<template>
  <section class="form">
    <h2 id="lag_person_overskrift">Endre person</h2>
    <div class="input-container-1">
    <div class="form-control">
      <p>Fornavn</p>
      <input type="text" v-model="person.firstName"/>
    </div>
    <div class="form-control">
      <p>Etternavn</p>
      <input type="text" v-model="person.lastName"/>
    </div>
    <div class="form-control">
      <p>Alder</p>
      <input id="age" name="age" type="number" v-model="person.age"/>
    </div>
    <div class="form-control">
      <p>Gatenavn</p>
      <input type="text" v-model="person.streetName"/>
    </div>
    <div class="form-control">
      <p>Postnummer</p>
      <input type="number" v-model="person.postNumber"/>
    </div>
    <div class="form-control">
      <p>Land</p>
      <input type="text" v-model="person.country"/>
    </div>
    <div class="form-control">
      <p>Mor</p>
      <input type="text" placeholder="Søk etter mor..." v-model="person.mom"/>
      <button><vue-feather type="search" size="10" stroke-width="4"></vue-feather></button>
    </div>
    </div>
    <div class="input-container-2">
    <div class="form-control">
      <p>Etternavn</p>
      <input type="text" v-model="person.lastName"/>
    </div>
    <div class="form-control">
      <p>Fødselsdato</p>
      <input type="date" v-model="person.birthDate"/>
    </div>
    <div class="form-control">
      <p>Gatenummer</p>
      <input type="number" v-model="person.streetNumber"/>
    </div>
    <div class="form-control">
      <p>By</p>
      <input type="text" v-model="person.city"/>
    </div>
    <div class="form-control">
      <p>Hoderadius</p>
      <input type="number" v-model="person.headRadius"/>
    </div>
    <div class="form-control">
      <p>Far</p>
      <input type="text" placeholder="Søk etter far..." v-model="dad"/>
      <button ><vue-feather type="search" size="10px" stroke-width="4"></vue-feather></button>
    </div>
    </div>

    <div>
      <standard-button @click="parentFunction">Lagre</standard-button>
    </div>
  </section>
</template>

<script setup>
  import VueFeather from 'vue-feather';

  import StandardButton from "@/components/UI/StandardButton.vue";
  import {usePerson} from "../Store/personStore.js"
  import {useRouter} from "vue-router"
  import { searchPerson } from "../RestController/Controller";
  import {ref} from "vue";

  const search = ref("Halvor")
  const router = useRouter();
  const pers = usePerson()
  const person = pers.Person

    function goToParentView() {
      searchPerson(search.value)
      router.push("/select-parent")
    }

  // const firstName = ref('');
  // const age = ref(null);
  // const streetName = ref('');
  // const postNumber = ref(null);
  // const country = ref('');
  // const mom = ref('');
  // const lastName = ref('');
  // const birthDate = ref(null);
  // const streetNumber = ref(null);
  // const city = ref('');
  // const headRadius = ref(null);
  // const dad = ref('');


//  function submitForm() {
//     console.log('Fornavn: ' + this.firstName);
//     this.firstName = '';
// }

</script>

<style scoped>

  * {
  box-sizing: border-box;
  }

  section {
  background-color: rgb(38, 66, 58);
  margin: 0;
  color: rgb(255, 255, 255);
  }

  .form-control p {
    margin-bottom: 1px;
    font-size: 12px
  }

  .form-control button {
      background-color: rgb(90, 234, 146);
      color: rgb(38, 66, 58);
      border: 1px solid rgb(90, 234, 146);
      border-radius: 12px;
      padding: 1px 6px;
      right: 2px;
      top: 3px;
      /*position: absolute;*/
      cursor: pointer;
  }

  .form-control input {
      border: 0;
      border-radius: 12px;
      padding: 5px 20px 5px 15px;
      outline: none;
      margin-top: 0;
      width: 100%;
  }

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