var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    http = require('http'),
    controllers = require('./server/controllers/namespace.js')

mongoose.connect('mongodb://localhost:27017/MeanAnalytics');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use('/static', express.static(__dirname + '/client/static'));
app.use('/css', express.static(__dirname + '/client/static/css'));
app.use('/img', express.static(__dirname + '/client/static/img'));
app.use('/font', express.static(__dirname + '/client/static/font'));
app.use('/js', express.static(__dirname + '/client/static/js/vendor'));
app.use('/controllers', express.static(__dirname + '/client/static/js/controllers'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/client/views/index.html');
});

app.get('/test', function(req,res){
    res.sendFile(__dirname + '/client/views/test.html');
})

app.get('/api/cpu', controllers.machine.cpu)
app.get('/api/ram', controllers.machine.ram)
app.get('/api/os', controllers.machine.opsys)
app.get('/api/cpuload', controllers.machine.cpuload)
app.post('/test', controllers.test.test)
app.get('/gender/:gender', controllers.test.gender)
app.post('/api/book', controllers.test.book)
app.get('/api/getbookings/:film', controllers.test.getbookings)
app.get('/api/getfilm/:film', controllers.test.getfilm)

app.listen(3000, function () {
    console.log("Listening on port 3000")
})
