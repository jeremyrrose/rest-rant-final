// configuration
require('dotenv').config()
const express = require('express')
const app = express()

// middleware
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// routes
app.get('/', (req, res) => {
    res.render('home')
})

app.use('/places', require('./controllers/places'))

app.get("*", (req, res) => {
    res.status(404).send("<h1>404 NOT FOUND</h1>")
})

// fire it up
app.listen(process.env.PORT, () => console.log(`Listening on PORT ${process.env.PORT}`))
