import Adress from "./Adress.js";

export default class Person {
  /* id;
  firstName;
  lastName;
  age;
  headRadius;
  birthDay;
  momId;
  dadId;
  dadFirstName;
  dadLastName;
  momFirstName;
  momLastName;

  Adress; */

  constructor(person) {
    this.id = parseInt(person.id) ?? NaN;
    this.firstName = person.firstName ?? null;
    this.lastName = person.lastName ?? null;
    this.age = parseInt(person.age) ?? NaN;
    this.headRadius = parseFloat(person.headRadius) ?? NaN;
    this.birthDay = Date.parse(person.birthDay) ?? NaN;
    this.momId = parseInt(this.momId) ?? NaN;
    this.dadId = parseInt(this.dadId) ?? NaN;
    this.dadFirstName = person.dadFirstName ?? null;
    this.dadLastName = person.dadLastName ?? null;
    this.momFirstName = person.momFirstName ?? null;
    this.momLastName = person.momLastName ?? null;

    this.Adress = new Adress(
      person.streetName ?? null,
      person.number ?? NaN,
      person.city ?? null,
      person.postNumber ?? NaN,
      person.country ?? null
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
