var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    http = require('http');

mongoose.connect('mongodb://localhost:27017/MeanAnalytics');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use('/static', express.static(__dirname + '/client/static'));
app.use('/css', express.static(__dirname + '/client/static/css'));
app.use('/img', express.static(__dirname + '/client/static/img'));
app.use('/font', express.static(__dirname + '/client/static/font'));
app.use('/js', express.static(__dirname + '/client/static/js'));

app.get('/', function(req,res){
    res.sendFile(__dirname + '/client/views/index.html');
});

app.listen(3000, function(){
    console.log("Listening on port 3000")
})