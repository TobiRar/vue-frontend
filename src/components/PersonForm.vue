<template>
  <section  class="form">
    <div class="form-container">
      <h2 class="form-h2" ><slot name="editOrCreate"></slot> person</h2>
      <div class="input-container-1">
        <div class="form-control">
          <p>Fornavn</p>
          <input type="text" v-model="person.firstName"/>
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
          <div class="parent-search">
            <input type="text" placeholder="Søk etter mor..." v-model="search"/>
            <button @click="goToParentView()"><vue-feather type="search" size="10" stroke-width="4"></vue-feather></button>
          </div>
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
          <div class="parent-search">
            <input type="text" placeholder="Søk etter far..." v-model="search"/>
            <button @click="goToParentView('dad')"><vue-feather type="search" size="10px" stroke-width="4"></vue-feather></button>
          </div>
        </div>
      </div>
    </div>
    <div class="save-button">
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
  import { useSelectedParent } from '../Store/selectedPerson'; 

  defineProps(["parentFunction", "editOrCreate" ])

  const search = ref("")
  const router = useRouter();
  const pers = usePerson()
  const person = pers.Person

    function goToParentView(parentToChoose) {
      const parent = useSelectedParent()
      parent.value = parentToChoose
      searchPerson(search.value)
      router.push("/select-parent")
    }

</script>

<style scoped>

  * {
    box-sizing: border-box;
  }

  section {
    background-color: rgb(38, 66, 58);
    margin: 30px 0 0 0;
    color: rgb(255, 255, 255);
  }

  .form-container {
    justify-content: center;
    display: grid;
    grid-template-columns: 100px 100px 50px 100px 100px;
    grid-template-rows: auto;
    grid-template-areas:
      "header header header header ."
      "side side . footer footer";
  }

  .form-h2 {
    grid-area: header;
  }

  .input-container-1 {
    grid-area: side;
  }

  .input-container-2 {
    grid-area: footer;
  }

  .input-container-1, .input-container-2 {
    width: 100%;
    padding: 0;
    margin:0;
  }

  .form-control {
    display: block;
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

  .parent-search {
      position: relative;
      display: inline-block;
      width: 100%;
  }

  .parent-search input {
      border: 0;
      border-radius: 12px;
      padding: 5px 20px 5px 15px;
      outline: none;
      margin-top: 0;
      width: 100%;
  }

  .parent-search input:focus {
    outline: none;
  }

  .parent_search button {
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

  .save-button {
    display: flex;
    justify-content: center;
    margin-top: 30px;
  }
</style>