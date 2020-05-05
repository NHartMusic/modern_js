const rats = [
    { id: 1, name: 'ThiccBoi', powerLevel: 4000 },
    { id: 2, name: 'Platticus', powerLevel: 5000 },
    { id: 3, name: 'Ratticus', powerLevel: 69 }
]

const ratSearch = () => {
    for (let i = 0; i < rats.length; i++) {
        return rats[i]
    }
}

const foundMyRats = ratSearch()


console.log(foundMyRats)