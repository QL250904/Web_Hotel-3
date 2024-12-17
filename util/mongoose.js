//util: là thư mục công cụ

const { default: mongoose } = require("mongoose")

//mongoose là file js để chuyển đổi object
module.exports = {
    mutipleMongooseToObj : function(mongooses){
        return mongooses.map(mongoose => mongoose.toObject())
    },
    mongooseToObj: function (mongoose) {
        return mongoose ? mongoose.toObject():mongoose;
    }
};