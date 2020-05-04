const calcArea = function (radius) {
    return 3.14 * radius ** 2
}

//dont worry about it 
//const platRat = ratman(4)

const area = calcArea(69)

// console.log(area)

//arrow function version of function above

const calcArrow = radius => 3.14 * radius ** 2

const arrowArea = calcArrow(127)

//its so nice and clean!! 

//another one 

const greet = function () {
    return 'hi god its me'
}

const greeting = greet()

//arrowed up 

const arrowGreet = () => 'its your boi'

const theGreet = arrowGreet()


console.log(theGreet)