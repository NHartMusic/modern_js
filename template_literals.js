const title = 'Best Albums of 2020'
const author = 'Nick Hart'
const likes = '3 hunnid thousand'

//concatenation 
let concat = 'The blog post titled ' + title + ', which was written by ' + author + ', has ' + likes + ' likes.'

//template literals method
let literal = `The blog post titled ${title}, which was written by ${author}, has ${likes} likes.`

//html template
let html = `
    <h2>${title}</h2>
    <h5>by ${author}</h5>
    <span>This blog post has ${likes} likes.</span>
`



console.log()