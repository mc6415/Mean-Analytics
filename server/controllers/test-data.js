var Test = require('../models/test-model')
var Booking = require('../models/booking')
var Film = require('../models/film')

module.exports.test = function(req,res){
    var test  = new Test(req.body)
    test.save(function(err,result){
        if(err === null){
            console.log(result)
        }
    })
}

module.exports.gender = function(req,res){
    var gender = req.params.gender
    var results = []
    Test.find({gender: "M"}, function(err,result){
        results.push(result)
        Test.find({gender: "F"}, function(err,result){
            results.push(result)
            res.json({results})
        })
    })    
}

module.exports.book = function(req,res){
    var booking = new Booking(req.body)
    console.log(booking)
        booking.save(function(err,result){
        if(err === null){
            res.json(result)
        }
    })
}

module.exports.getbookings = function(req,res){
    Booking.find({film: req.params.film}, function(err,result){
        res.json({result})
    })
}

module.exports.getfilm = function(req,res){
    Film.find({name: req.params.film}, function(err,result){
       res.json({result})
    })
}