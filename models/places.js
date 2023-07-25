const mongoose = require('mongoose')
const Comment = require('./comment')

const placeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  pic: { type: String, default: "http://placekitten.com/350/350" },
  cuisines: { type: String, required: true },
  city: { type: String, default: 'Anytown' },
  state: { type: String, default: 'USA' },
  founded: {
    type: Number,
    min: [1673, 'Surely not that old?!'],
    max: [new Date().getFullYear(), 'Hey, this year is in the future!']
  },
  rating: {type: Number, min: 0, max: 5, default: 2.5 },
  comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}]
})

placeSchema.methods.showEstablished = function () {
  return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}.`
}

placeSchema.pre('save', async function() {
  const allComments = await Promise.all(this.comments.map(async id => await Comment.findById(id).select('stars')))
  this.rating = allComments.reduce((acc,cur)=>acc+cur.stars,0) / allComments.length
})

module.exports = mongoose.model('Place', placeSchema)
