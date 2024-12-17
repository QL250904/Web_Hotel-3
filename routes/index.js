const roomRouter = require('./room');
const siteRouter = require('./site');
const userRouter = require('./user');
const reservationRouter = require('./reservation');
const messageRouter = require('./message');

function route(app){
    app.use('/',siteRouter);
    app.use('/room',roomRouter);
    app.use('/user',userRouter);
    app.use('/reservation',reservationRouter);
    app.use('/message',messageRouter);
}

module.exports = route; 