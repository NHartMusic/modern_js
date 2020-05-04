const password = 'pl@ttRatt6669'

if (password.length >= 12 && password.includes('@')) {
    console.log('This password hard af bruh bruh')
} else if (password.length >= 8 || password.includes('@') && password.length >= 5) {
    console.log('This password ok I guess')
} else {
    console.log('This password fucking sucks dude')
}