//Model Message
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Message = new Schema({
    phoneNumber : {type: String,maxLength: 15},
    message: {type: String, maxLength: 255}
});

module.exports = mongoose.model('Message', Message);