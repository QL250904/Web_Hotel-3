//Connect database

const mongoose = require ('mongoose');

async function connect(){
    try {
        await mongoose.connect('mongodb://localhost/hotel6');
        console.log('Db successfully!!!');
    } catch (error) {
        console.log('Fail db')
    }
}

module.exports = {connect};
