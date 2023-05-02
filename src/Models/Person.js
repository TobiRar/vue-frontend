import Adress from "./Adress"
export class Person {
    constructor(age, birthDay, city, country, dadFirstName, dadId, dadLastName, dadName, firstName, headRadius, id, lastName, momFirstName, momId, momLastName, momName, number, postNumber, streetName) {
        this.adress = new Adress()
        this.adress.city = city
        this.adress.country = country
        this.adress.number = number
        this.adress.postNumber = postNumber
        this.adress.streetName = streetName
        this.age = age
        this.birthDay = birthDay
        this.dadFirstName = dadFirstName
        this.dadId = dadId
        this.dadLastName = dadLastName
        this.dadName = dadFirstName + " " + dadLastName
        this.firstName = firstName
        this.headRadius = Number(headRadius)
        this.id = id
        this.lastName = lastName
        this.momFirstName = momFirstName
        this.momId = momId
        this.momLastName = momLastName
        this.momName = momFirstName + " " + momLastName
    }
}
