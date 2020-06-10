// let people = [
//     {
//         name: "Marcel",
//         age: 31,
//         pet: {
//             name: "Fido",
//             age: 6
//         }
//     }, {
//         name: "John",
//         age: 21,
//         pet: {
//             name: "Spot",
//             age: 6
//         }
//     }
// ];

// for (const person of people) {
//     console.log(`${person.name} is ${person.age} years old`)
//     console.log(`${person.name} has a pet called ${person.pet.name}`)
// }

// Q1. Create an array of objects called libraries. 
// Each should have the following properties: name which should be a string, address which should be a string 
// and headLibrarian which should be an object with properties name and age.

// libraries = [
//     {
//         libraryName: "West Library",
//         address: "123 West St",
//         headLibrarian: {
//             name: "Mrs Potts",
//             age: 25
//         }
//     }, {
//         libraryName: "East Library",
//         address: "321 East St",
//         headLibrarian: {
//             name: "Mrs Panns",
//             age: 60
//         }
//     }
// ];

// // console.log(libraries)

// // Q2. For each Library, add a property called books which sholuld be an array of objects. Each book should have the following properties: title, author, yearOfPublication

// libraries[0].books = [
//     {
//         title: "Great Book",
//         author: "Jim Greats",
//         published: 2005
//     }, {
//         title: "Pretty Good Book",
//         author: "Tom Goods",
//         published: 1999
//     }, {
//         title: "Harry Pitts",
//         author: "JK Rolls",
//         published: 2001
//     }, {
//         title: "Great Scot",
//         author: "George Scots",
//         published: 2010
//     }
// ];
// console.log(libraries[0].books)

// libraries[1].books = [
//     {
//         title: "SoSo Book",
//         author: "Nick Sowy",
//         published: 1950
//     }, {
//         title: "Bad Book",
//         author: "Ken Baddy",
//         published: 2010
//     }, {
//         title: "WSW Book",
//         author: "Tony Poppa",
//         published: 1934
//     }, {
//         title: "Not Much Happened",
//         author: "Bob Balck",
//         published: 1969
//     }
// ];
// console.log(libraries[1].books)

// Q3. Use for..of and/or for..in loops to write the book titles across all the libraries that have been published in the last 20 years.
// for (const library of libraries) {
//     for (const book of library.books) {
//         if (book.published > 2000) {
//             console.log(book.title)
//         }
//     }
// }

// Q4. Use for..of and/or for..in loops to write all of the authors of books that appear in a library with a librarian that is under 30 years old.
// for (const library of libraries) {
//     if (library.headLibrarian.age < 30) {
//         for (const book of library.books) {
//             console.log(book.author)
//         }
//     }
// }

// Q5. Use for..of and/or for loops to write all the names of libraries that have at least 3 books published before 2000
// for (const library of libraries) {
//     let count = 0;
//     for (const book of library.books) {
//         if (book.published < 2000) {
//             count++;
//         }
//     } if (count >= 3) {
//         console.log(library.libraryName);
//     } 
// }    

// School
let schools = [{
    name: "Old School",
    address: "1980 Old City",
    headTeacher: {
        firstName: "Tim",
        lastName: "Tam",
    }
}, {
    name: "New School",
    address: "2000 New Town",
    headTeacher: {
        firstName: "Jim",
        lastName: "Jam"
    }
}];

// Stduents
schools[0].students = [{
    studFirstName: "Rob",
    studLastName: "Rad",
    age: 16,
    grade: 11
}, {
    studFirstName: "Jan",
    studLastName: "Tan",
    age: 14,
    grade: 9
}, {
    studFirstName: "Tom",
    studLastName: "Tuck",
    age: 7,
    grade: 1
}, {
    studFirstName: "Bob",
    studLastName: "Barker",
    age: 15,
    grade: 10
}, {
    studFirstName: "Jimmy",
    studLastName: "Crinny",
    age: 12,
    grade: 7
}];

schools[1].students = [{
    studFirstName: "Tammy",
    studLastName: "White",
    age: 15,
    grade: 10
}, {
    studFirstName: "Nick",
    studLastName: "Nack",
    age: 12,
    grade: 7
}, {
    studFirstName: "James",
    studLastName: "Lucious",
    age: 8,
    grade: 2
}, {
    studFirstName: "Sam",
    studLastName: "Terrance",
    age: 5,
    grade: 1
}];

// Teachers
schools[0].teachers = [{
    teachName: "Sammy",
    teachSurname: "Wood",
    subject: "History"
}, {
    teachName: "Don",
    teachSurname: "Brasco",
    subject: "Maths"
}];

schools[1].teachers = [{
    teachName: "Johnny",
    teachSurname: "Begood",
    subject: "English"
}, {
    teachName: "Ritchie",
    teachSurname: "Rich",
    subject: "Commerce"
}];

// Q1. Use for..of loop(s) to write out all the students with a yearGroup greater than 9

// for (const school of schools) {
//     for (const student of school.students) {
//         if (student.grade >= 9) {
//             console.log(`${student.studFirstName} ${student.studLastName}`)
//         } 
//     }
// }

// Q2. Use for..of loop(s) to write out all the teachers that work at a school with 4 students or less

// for (const school of schools) {
//     for (const teacher of school.teachers) {
//         if (school.students.length <= 4) {
//             console.log(`${teacher.teachName} ${teacher.teachSurname}`)
//         }
//     }
// }

// Q3. Use for..of loop(s) to write out the full names of all students who have an age of 12 and a yearGroup of 7

// for (const school of schools) {
//     for (const student of school.students) {
//         if (student.age == 12 && student.grade == 7) {
//             console.log(`${student.studFirstName} ${student.studLastName}`)
//         }
//     } 
// }

// Q4. Use for..of loop(s) and any other method you know to log how many students are in each yearGroup across all schools (assume yearGroup is a whole number from 0 - 12)

// for (const school of schools) {
//     let gradeCount = 0;
//     for (const student of school.students) {
//         if (student.grade == 11) {
//             gradeCount++;
//             console.log(`There are ${gradeCount} in grade ${student.grade}`)
//         }
//     }
// }

// Luke's solution
// see pic