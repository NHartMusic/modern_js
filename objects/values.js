//primitive values -> copies of primitive values are not changed when original value is changed

let scoreOne = 69
let scoreTwo = scoreOne

console.log(`score one: ${scoreOne}, score two: ${scoreTwo}. nice.`)

scoreOne = 420

console.log(`score one: ${scoreOne}, score two: ${scoreTwo}. nice.`)



//reference values -> changing value will change values of copies as well 

const userOne = { name: 'Rickus Dickus', age: 104 }
const userTwo = userOne

console.log(userOne, userTwo)

userOne.age = 69

console.log(userOne, userTwo)

//hell yeah