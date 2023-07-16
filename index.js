// configuration
require('dotenv').config()
const express = require('express')
const methodOverride = require('method-override')
const app = express()

// middleware
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride("_method"))

// routes
app.get('/', (req, res) => {
    res.render('home')
})

app.use('/places', require('./controllers/places'))

app.get("*", (req, res) => {
    res.render("error404")
})

// fire it up
app.listen(process.env.PORT, () => console.log(`Listening on PORT ${process.env.PORT}`))
