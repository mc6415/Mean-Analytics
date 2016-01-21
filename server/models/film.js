var mongoose = require('mongoose')

module.exports = mongoose.model('Film', {
    name: {type: String},
    spaces: {type: String}
})