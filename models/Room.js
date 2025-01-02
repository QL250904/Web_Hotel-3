//Model ROOM
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Room = new Schema({
    roomNumber : {type: String,maxLength: 5},
    type : {type: String, maxLength: 20},
    image: {type: String, maxLength: 255},
    cost: {type: String, maxLength: 20}
});

module.exports = mongoose.model('Room', Room);