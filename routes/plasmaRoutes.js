module.exports = function(app){
    var donors = require('../controller/donorController');
    var patients = require('../controller/patientController');

    app.route('/donors')
        .get(donors.get_all_donors)
        .post(donors.create_donor);

    app.route('/donors/:donorId')
        .get(donors.get_donor)
        .put(donors.update_donor)
        .delete(donors.delete_donor);

    app.route('/patients')
        .get(patients.get_all_patients)
        .post(patients.create_patient);

    app.route('/patients/:patientId')
        .get(patients.get_patient)
        .put(patients.update_patient)
        .delete(patients.delete_patient);
};