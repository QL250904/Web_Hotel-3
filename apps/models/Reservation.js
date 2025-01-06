//Model Reservation
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongooseDelete = require('mongoose-delete');

const Reservation = new Schema({
    idReservation : {type: String,maxLength: 10},
    phoneNumber : {type: String, maxLength: 15},
    roomNumber: {type: String, maxLength: 5}
});

//Add plugin for schema
Reservation.plugin(mongooseDelete,
     { overrideMethods: 'all' }, 
     { deletedAt : true });

module.exports = mongoose.model('Reservation', Reservation);