const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var donorSchema = new Schema({
    name:{
        type:String
    },
    age:{
        type:String
    },
    bloodGroup:{
        type:String
    },
    location:{
        type:String
    },
    contact:{
        type:String
    }
});

module.exports = mongoose.model("Donors",donorSchema);