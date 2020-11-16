var mongoose = require('mongoose');
var Patient = mongoose.model('Patients');

var get_all_patients = function(req, res){
    Patient.find({}, (err, data)=>{
        if(err)
            res.send(err);

        res.json(data);
    });
};

var create_patient = function(req, res){
    var patient = new Patient(req.body);
    patient.save((err,data)=>{
        if(err)
            res.send(err);

        res.json(data);
    });
};

var get_patient = function(req, res){
    Patient.findOne({_id:req.params.patientId}, (err, data)=>{
        if(err)
            res.send(err);

        res.json(data);
    });
};

var update_patient = function(req, res){
    Patient.findOneAndUpdate({_id:req.params.patientId}, req.body,{new:true}, (err, data)=>{
        if(err)
            res.send(err);

        res.json(data);
    });
};

var delete_patient = function(req, res){
    Patient.remove({_id:req.params.patientId}, (err,data)=>{
        if(err)
            res.send(err);

        res.json(data);
    });
};

module.exports = { get_all_patients,
                    create_patient,
                    get_patient,
                    update_patient,
                    delete_patient};