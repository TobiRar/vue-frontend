export default class Adress {
  constructor(streetName, number, city, postNumber, country) {
    this.streetName = streetName;
    this.number = parseInt(number);
    this.city = city;
    this.postNumber = parseInt(postNumber);
    this.country = country;
  }
}
