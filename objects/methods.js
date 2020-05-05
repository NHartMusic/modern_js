

let user3 = {
    name: 'Mary Ann Cotton',
    age: 69,
    email: 'syrupmama69@blutwurst.de',
    location: 'The Town',
    blogs: [
        {
            title: 'Where My Baby Daddy At',
            likes: 420
        },
        {
            title: 'Who Got Some Weed For Me',
            likes: 69
        }
    ],
    login() {
        console.log('We up in this thang')
    },
    logout() {
        console.log('Bye Bye Bitch')
    },
    logBlogs() {
        //console.log(this.blogs)
        console.log('Mary Ann is hot af and she has written these blogs: ')
        this.blogs.forEach(blog => {
            console.log(blog.title, blog.likes)
        })
    }
}

//user3.login()

//user3.logout()

// T H I S doesnt work with arrow functions 

user3.logBlogs()

//console.log(user3.blogs)

