const router = require('express').Router()
const db = require('../../models')

// INDEX
router.get('/', (req, res) => {
    db.Place.find()
    .limit(40)
    .then((places) => {
      res.json(places)
    })
    .catch(err => {
      console.log(err) 
      res.status(404)
    })
})

// CREATE
router.post('/', (req, res) => { 
    db.Place.create(req.body)
    .then((place) => {
        res.status(201).json(place)
    })
    .catch(err => {
      if (err && err.name == 'ValidationError') {
        let message = 'Validation Error: '
        for (var field in err.errors) {
            message += `${field} was ${err.errors[field].value}. `
            message += `${err.errors[field].message}`
        }
        console.log('Validation error message', message)
        res.status(401).json({ message, prev: req.body })
      } else {
        console.log(err) 
        res.status(500).send("Internal server error.")
      }
    })
  })

// SHOW
router.get('/:id', (req, res) => {
    db.Place.findById(req.params.id)
    .populate({ path: 'comments', options: { limit: 10 } })
    .then(place => {
        if (place) {
            res.status(200).json(place)
        } else {
            res.sendStatus(404)
        }
    })
    .catch(err => {
        console.log(err) 
        res.sendStatus(500)
    })
})

// UPDATE
router.put('/:id', (req, res) => {
    db.Place.findByIdAndUpdate(req.params.id, req.body, { runValidators: true }).
    then(place => {
      res.redirect(`/api/places/${req.params.id}`)
    })
    .catch(err=>{
        console.log(err) 
        res.status(401).json(err)
    })
  })

// DELETE
router.delete('/:id', (req, res) => {
    db.Place.findByIdAndDelete(req.params.id)
    .then(place => {
        if (place) {
            res.sendStatus(200)
        } else {
            res.sendStatus(404)
        }
    })
    .catch(err=>{
        console.log(err) 
        res.status(401).json(err)
    })
  })

module.exports = router