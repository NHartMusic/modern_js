//let tracks = [
//    { id: 1, plays: 500, auto: false },
//    { id: 2, plays: 1500, auto: false },
//    { id: 3, plays: 700, auto: false },
//    { id: 1, plays: 800, auto: false },
//    { id: 4, plays: 900, auto: false },
//    { id: 2, plays: 500, auto: false },
//]


const people = [
    { name: 'Guy Fieri', age: 420 },
    { name: 'Big Willy', age: 69 },
    { name: 'Thicc Rick', age: 420 }
]

let blazeIt = people.filter(person => person.age === 420)

console.log(blazeIt)