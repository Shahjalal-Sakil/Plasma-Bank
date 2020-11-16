var express = require('express');
var app = express();
var port = process.env.port|| 8080;
var mongoose = require('mongoose');
var Donor = require('./models/donorModel');
var Patient = require('./models/patientModel');
var bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/myDd',{useNewUrlParser:true,useUnifiedTopology:true});

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var routes = require('./routes/plasmaRoutes');
routes(app);

app.listen(port);
console.log("API started at port "+ port);
