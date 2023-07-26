//////////////////////
// CONFIGURATION
require('dotenv').config()
const express = require('express')
const methodOverride = require('method-override')
const app = express()

//////////////////////
// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))

// use HTML form data for views
app.use('/places', express.urlencoded({ extended: true }))
app.use('/places', methodOverride("_method"))

// use JSON for api -- body-parser is no longer needed as of Express 4.16
app.use('/api', express.json())

//////////////////////
// ROUTES
app.get('/', (req, res) => {
    res.render('home')
})

// API CONTROLLER
app.use('/api', require('./api'))

// WEBAPP CONTROLLER
app.use('/places', require('./controllers/places'))

// 404
app.get("*", (req, res) => {
    res.render("error404")
})

///////////////////////
// LISTEN
app.listen(process.env.PORT, () => console.log(`Listening on PORT ${process.env.PORT}`))
