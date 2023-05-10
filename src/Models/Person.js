import Adress from "./Adress.js";

export default class Person {
  constructor(person) {
    this.id = person.id;
    this.firstName = person.firstName
    this.lastName = person.lastName 
    this.age = parseInt(person.age) 
    this.headRadius = parseFloat(person.headRadius)
    this.birthDay = person.birthDay
    this.momId = parseInt(person.momId) 
    this.dadId = parseInt(person.dadId) 
    this.dadFirstName = person.dadFirstName 
    this.dadLastName = person.dadLastName 
    this.momFirstName = person.momFirstName
    this.momLastName = person.momLastName

    this.adress = new Adress(
      person.streetName, 
      person.number, 
      person.city, 
      person.postNumber,
      person.country 
    );
  }
}

/* export default class Person {
  constructor(
    age,
    birthDay,
    city,
    country,
    dadFirstName,
    dadId,
    dadLastName,
    dadName,
    firstName,
    headRadius,
    id,
    lastName,
    momFirstName,
    momId,
    momLastName,
    momName,
    number,
    postNumber,
    streetName
  ) {
    this.adress = new Adress();
    this.adress.city = city;
    this.adress.country = country;
    this.adress.number = number;
    this.adress.postNumber = postNumber;
    this.adress.streetName = streetName;
    this.age = age;
    this.birthDay = birthDay;
    this.dadFirstName = dadFirstName;
    this.dadId = dadId;
    this.dadLastName = dadLastName;
    this.dadName = dadFirstName + " " + dadLastName;
    this.firstName = firstName;
    this.headRadius = Number(headRadius);
    this.id = id;
    this.lastName = lastName;
    this.momFirstName = momFirstName;
    this.momId = momId;
    this.momLastName = momLastName;
    this.momName = momFirstName + " " + momLastName;
  }
} */
