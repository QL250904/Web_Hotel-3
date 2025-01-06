
const Message = require ('../models/Message');
const { mutipleMongooseToObj } = require('../../util/mongoose');
const { mongooseToObj } = require('../../util/mongoose');

class MessageControllers{
    store(req,res,next){
        const message = new Message(req.body);
        message.save()
            .then(() => res.redirect('/')) //back to home page
            .catch()
    }

    list(req,res,next){
        Message.find({})
        .then(message => {
            res.render('messages/list',{
                message: mutipleMongooseToObj(message)
            });
        })
        .catch(error => next(error));
    }

}


    
module.exports = new MessageControllers();
