
const Room = require ('../models/Room');
const { mutipleMongooseToObj } = require('../../util/mongoose');
const { mongooseToObj } = require('../../util/mongoose');

class RoomControllers{

    // [Get] /room/:phoneNumber
    detail(req,res,next){
        Room.findOne({roomNumber: req.params.roomNumber})
            .then(room =>{
                res.render('room/detail',{
                    room : mongooseToObj(room)
                });
            })
            .catch(error => next(error));
    }
    // [Get] /room/create
    create(req,res,next){
        res.render('room/create');
    }

    // [Get] /room/store
    store(req,res,next){
        const room = new Room(req.body);
        room.save()
            .then(() => res.redirect('list')) //back to home page
            .catch()
    }
    list(req,res,next){
        Room.find({})
        .then(room => {
            res.render('room/list',{
                room: mutipleMongooseToObj(room)
            });
        })
        .catch(error => next(error));
    }

    edit(req,res,next){
        Room.findById(req.params.id)
            .then(room => res.render('room/edit',{
                room: mongooseToObj(room)
            }))
            .catch(next);
    }

    //[PUT]/room/:id
    update(req,res,next){
        Room.updateOne({_id: req.params.id}, req.body)
            .then(()=>res.redirect('/room/list'))
            .catch(next);
    }

    //[DELETE]/room/:id
    delete(req,res,next){
        Room.deleteOne({_id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(next);
    }
}


    
module.exports = new RoomControllers();
