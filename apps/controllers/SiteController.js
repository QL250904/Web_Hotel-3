
const Room = require ('../models/Room');
const { mutipleMongooseToObj } = require('../../util/mongoose');

class SiteControllers{

    aboutus(req,res,next){
        res.render('aboutus');
    }

    admin(req,res,next){
        res.render('user/admin');
    }
    // [Get] /Site
    index(req, res) {
        Room.find({roomNumber: /0/i})
        .then(room => {
            res.render('home',{
                room: mutipleMongooseToObj(room)
            });
        })//room = room.map(room => room.toObject()): chọc vào db lấy ra room và trả về view home; gui ket qua room qua view room
        .catch(error => next(error));
    }
    filter(req, res) {
        var min = req.body.minCost, max;
        if (req.body.maxCost == "") max = 99;
        else {
            max = req.body.maxCost;
        }
        Room.find({cost: {$gte: min, $lte: max}})
        .then(room => {
            res.render('home',{
                room: mutipleMongooseToObj(room)
            });
        })
            .catch(error => next(error));
        console.log("MIN,MAX: "+min + "," + max);
    }
}

module.exports = new SiteControllers;
