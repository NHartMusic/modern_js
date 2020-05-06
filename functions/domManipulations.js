//console.log('fuck u')

// const ul = document.querySelector('.people')

const people = ['Steve Bannon', 'Michelle Bachman', 'Darth Vader', 'Billy Lee Tuttle']

// let html = ``

// people.forEach(function (person) {
//     html += `<li style='color: pink'>${person}</li>`
// })

//console.log(html)
// ul.innerHTML = html

// const para = document.querySelectorAll('p')
// 
// console.log(para) 

const para = document.querySelector('p')

//para.innerText += ', here come that rat'

const paras = document.querySelectorAll('p')

//console.log(paras)

// paras.forEach(para => {
//     console.log(para.innerText)
//     para.innerText = ' rat'
// })

const content = document.querySelector('.content')

//console.log(content.innerHTML)

//content.innerHTML += '<h2>LETS GO BITCH</h2>'

const theHomies = ['Ayn Rand', 'Baron Trump', 'Steve Harvey', 'Al Capone', 'Lindsay Lohan']

// theHomies.forEach(homie => {
//     content.innerHTML += `<p>${homie}</p>`
// })

const link = document.querySelector('a')

//console.log(link.getAttribute('href'))

link.setAttribute('href', 'https://www.imdb.com/name/nm0000998/?ref_=fn_al_nm_1')
link.innerText = 'This your new daddy'


