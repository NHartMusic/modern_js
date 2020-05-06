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

const bill = function (products, tax) {
    let total = 0
    for (let i = 0; i < products.length; i++) {
        total += products[i] + products[i] * tax
    }
    return total
}

//arrow version

const arrowBill = (products, tax) => {
    let total = 0
    for (let i = 0; i < products.length; i++) {
        total += products[i] + products[i] * tax
    }
    return total
}

//console.log(arrowBill([11, 15, 30], 0.2))




