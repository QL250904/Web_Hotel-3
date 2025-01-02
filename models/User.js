//Model User
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    phoneNumber : {type: String,maxLength: 15},
    name : {type: String, maxLength: 40},
    password: {type: String, maxLength: 255}
});

module.exports = mongoose.model('User', User);