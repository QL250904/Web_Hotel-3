
const Reservation = require('../models/Reservation');
const Room = require('../models/Room');
const { mutipleMongooseToObj } = require('../../util/mongoose');
const { mongooseToObj } = require('../../util/mongoose');

class ReservationControllers{

    // [Get] /reservation/create
    create(req,res,next){
        res.render('reservation/create');
    }
    // [Get] /reservation/store
    store(req,res,next){
        const reservation = new Reservation(req.body);
        reservation.save()
            .then(() => res.redirect('list')) //back to home page
            .catch()
        // Room.findOneAndUpdate({roomNumber: req.body.roomNumber}, {roomNumber: "vvv"}, {
        //         new: true
        //     });
    }

    // [Get] /reservation/trash
    trash(req,res,next){
       Reservation.findDeleted({})
        .then(reservation => {
            res.render('reservation/trash',{
                reservation: mutipleMongooseToObj(reservation)
            });
        })
        .catch(error => next(error));
    }

    list(req, res, next) {
        Promise.all([Reservation.find({}), Reservation.countDocumentsDeleted()])
        .then(([reservation,deletedReservation])=>{
            res.render('reservation/list', {
                deletedReservation,
                reservation: mutipleMongooseToObj(reservation)
            });
        })
        .catch(error => next(error));
    }

    edit(req,res,next){
        Reservation.findById(req.params.id)
            .then(reservation => res.render('reservation/edit',{
                reservation: mongooseToObj(reservation)
            }))
            .catch(next);
    }

    //[PUT]/room/:id
    update(req,res,next){
        Reservation.updateOne({_id: req.params.id}, req.body)
            .then(()=>res.redirect('/reservation/list'))
            .catch(next);
    }

    //[DELETE]/room/:id
    delete(req,res,next){
        Reservation.delete({_id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(next);
    }
    harddelete(req,res,next){
        Reservation.deleteOne({_id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(next);
    }

    //[restore]/room/:id/restore
    restore(req,res,next){
        Reservation.restore({_id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(next);
    }
    //GET /reservation/:roomNumber
    book(req,res,next){
        Room.findOne({roomNumber: req.params.roomNumber})
            .then(room =>{
                res.render('reservation/book',{
                    room : mongooseToObj(room)
                });
            })
            .catch(error => next(error));
    }

}


    
module.exports = new ReservationControllers();
