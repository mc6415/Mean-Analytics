var mongoose = require('mongoose')

module.exports = mongoose.model('Booking', {
    name: {type: String},
    number: {type: Number},
    film: {type: String}
})