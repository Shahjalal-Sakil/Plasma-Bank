var mongoose = require('mongoose');
var Donor = mongoose.model('Donors');

var get_all_donors = function(req,res){
    Donor.find({},function(err,data){
        if(err)
            res.send(err);
        res.json(data);
    });
};

var create_donor = function(req,res){
    var donor = new Donor(req.body);
    donor.save(function(err,data){
        if(err)
        res.send(err);
        res.json(data);
    });
};


var get_donor = function(req,res){
    Donor.findOne(req.params.bloodGroup,function(err,data){
        if(err)
            res.send(err);
        res.json(data);
    });
};

var update_donor = function(req,res){
    Donor.findOneAndUpdate({_id:req.params.donorId},req.body,{new:true},function(err,data){
        if(err)
            res.send(err);
        res.json(data);
    });
};

var delete_donor = function(req,res){
    Donor.remove({_id:req.params.donorId},function(err,data){
        if(err)
            res.send(err);
        res.json(data);
    });
};

module.exports = {get_all_donors,create_donor,get_donor,update_donor, delete_donor};
