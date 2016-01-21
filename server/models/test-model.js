var mongoose = require('mongoose');

module.exports = mongoose.model('Test', {
    name: {type: String},
    gender: {type: String},
    age: {type: Number}
})