// let Object = {
// key/Properties: values,
// }

// let person = {
//     name: "Marcel",
//     age: 38
// };
// console.log(person)         // output = { name: 'Marcel', age: 38 }
// console.log(person.name)    // output = { name: 'Marcel' }
// person.name = "Marz";       
// console.log(person.name)    // output = replaces name
// person.lastName = "Gil";    // or you can use person["lastName"] = "Gil";
// console.log(person)          // output = adds last name to property

// person.friends = ["Jim", "Tim", "Lim", "Sim"] // this adds new property of friends

// to acces a friend
// console.log(person.friends[2])  // output = Lim

// for (let i = 0; i < person.friends.length; i++) {
//     console.log(person.friends[i])                  // outputs all friends

// }

// for In Loop
// person[key]= "Gil"

// for (const key in person) {
//     console.log(`${key} has value: ${person[key]}`)
// }

// Q1.
// let pet = {
//     name: "Fido",
//     age: 5
// }
// console.log(pet);

// Q2.
// pet.owners = ["Jim", "Tim"];
// console.log(pet.owners);

// Q3.
// for (let i = 0; i < pet.owners.length; i++) {
//     console.log(pet.owners[i]);
// }

// Q4.
let breed = new Object();

// Q5.
breed["name"] = "Husky";
// console.log(breed);

// Q6.
breed.colour = "white";
// console.log(breed.colour);

// Q7.

for (const key in breed) {          // the key/property in breed
    console.log(key)
    console.log(breed[key])         // outputs breed all the values of the key/property
}

// let pet = {
//     name: "Rex",
//     age: 6
// }
// for (const key in pet) {
//         //  console.log(key)        // this calls name and age property
//          console.log(pet[key])      // this calls Rex and 6
// }

let rates = {
    CAD: 1.565,
    CHF: 1.1798,
    GBP: 0.87295
    };
for (const currencyCode in rates) {
    console.log(`the ${currencyCode} is currently ${rates[currencyCode]}`)
}