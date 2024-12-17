const express = require('express'); 
const router = express.Router();

const roomControllers = require('../app/controllers/RoomControllers');


router.get('/create',roomControllers.create);//trang them room 
router.post('/store',roomControllers.store);


router.get('/list',roomControllers.list);// sua phong
router.get('/:id/edit',roomControllers.edit);
router.put('/:id',roomControllers.update);
router.delete('/:id',roomControllers.delete);//xoa


router.get('/:roomNumber',roomControllers.detail);//trang room detail


module.exports = router;