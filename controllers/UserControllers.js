
const User = require ('../models/User');
const { mutipleMongooseToObj } = require('../../util/mongoose');
const { mongooseToObj } = require('../../util/mongoose');

class UserControllers{
        // [Get] /user/store
        create(req,res,next){
            res.render('user/logModule');
        }
        store(req,res,next){
            const user = new User(req.body);
            user.save()
                .then(() => res.redirect('/')) //back to home page
                .catch()
        }
        //[POST] /user/check
        login (req,res, next){
            res.render('user/login');
        }
        check(req,res,next){
            var phoneNumber = req.body.phoneNumber;
            var password = req.body.password;
            if (phoneNumber == "admin" && password == "admin") {
                res.redirect('/admin');
            }
            else {
                User.findOne({phoneNumber: phoneNumber,password: password}, (err, user)=>{
                        if (!user) {
                            console.log(!user);
                            setTimeout(()=>{
                                res.redirect('login');
                            },1000);
                            //res.send('Please check your account!');
                        }    
                        else{
                            console.log(!user);
                            user =>{
                                res.render('home',{
                                    user: mongooseToObj(user)
                                });
                            }
                            res.redirect('/');
                            console.log(user.name);
                        }
                    })
            }
        }

        list(req,res,next){
            User.find({})
            .then(user => {
                res.render('user/list',{
                    user: mutipleMongooseToObj(user)
                });
            })
            .catch(error => next(error));
        }
        //[DELETE]/user/:id
        delete(req,res,next){
            User.deleteOne({_id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(next);
    }

        
}


    
module.exports = new UserControllers();
