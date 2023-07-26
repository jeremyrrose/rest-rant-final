const router = require('express').Router()

router.get('/', (req, res) => {
    // it's likely this would actually redirect to documentation for this API
    res.json({message: "Hi there"})
})

// PLACES CONTROLLER
router.use('/places', require('./controllers/places'))

module.exports = router