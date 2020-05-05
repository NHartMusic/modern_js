// const speak = function (band = 'grateful dead', name = 'waluigi') {
//     console.log(`Fuck the ${band}, ${name}`)
// }
// 
// speak()

//another arrow example

const greet = function () {
    return 'hi god its me'
}

const greeting = greet()

//arrowed up 

const arrowGreet = () => 'its your boi'

arrowGreet()

//console.log(arrowGreet)

// functions v methods who gonn win 

//func-y boyz 

const helloThere = () => 'its me obi wan'

let benKenobi = helloThere()

//console.log(benKenobi)

//method men 

const name = 'rat'

let bigRat = name.toUpperCase()
//console.log(bigRat)

//yo lets FUCK with some callbacks 

// const myFunc = (callBackFunc) => {
//     let value = 50
//     callBackFunc(value)
// }
// 
// myFunc(value => {
//     console.log
// })

//callback + foreach 

let people = ['Katy Perry', 'Sherlock Holmes', 'Theresa May', 'Bruce Dern', 'Rand Paul (Daddy)']

const logPerson = (person, index) => {
    console.log(`${index}. what the fuck is up ${person}`)
}

people.forEach(logPerson)

//people.forEach((person, index) => {
//    console.log(index, person)
//})



//its lit! 





