// DEPENDENCIES
const { faker } = require('@faker-js/faker')

// DB MODELS
const db = require('../models')

const places = {
    Seattle: "WA",
    "New York": "NY",
    "Los Angeles": "CA",
    Asheville: "NC"
}

const createPlace = () => {
    const cityStateKey = Object.keys(places)[Math.floor(Math.random()*Object.values(places).length)]
    const cityState = [ cityStateKey, places[cityStateKey] ]
    return {
        name: faker.word.words({min: 1, max: Math.floor(Math.random()*5)}),
        city: cityState[0],
        state: cityState[1],
        cuisines: faker.word.adverb() + " " + faker.word.noun(),
        pic: faker.image.urlPicsumPhotos(),
        founded: Math.floor(Math.random()*60 + 1963)
    }
}

const main = async () => {

    // creates 400 random places
    const randoPlaces = []
    for (let i=0; i < 400; i++) {
        randoPlaces.push(createPlace())
    }

    // clears out the existing database
    await db.Place.deleteMany({})
    
    let createdPlaces

    try {
        createdPlaces = await db.Place.insertMany(randoPlaces)
        console.log('Inserted places!')
    } catch (err) {
        console.log('Failure!', err)
    }

    // clears out existing comments
    await db.Comment.deleteMany({})

    for (let i=0; i < 1600; i++) {
        const place = createdPlaces[Math.floor(Math.random()*createdPlaces.length)]
        const score = Math.floor(Math.random()*10) / 2
        const comment = await db.Comment.create({
            author: faker.person.fullName(),
            content: faker.lorem.sentence(),
            stars: score,
            rant: score > 2.5 ? false : true
        })
        place.comments.push(comment.id)
        await place.save()
    }

    console.log("Created comments!")
    process.exit()
}

main()