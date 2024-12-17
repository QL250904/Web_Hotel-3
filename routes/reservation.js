const express = require('express'); 
const router = express.Router();

const reservationControllers = require('../app/controllers/ReservationControllers');

router.get('/create',reservationControllers.create);//trang them reservation 
router.post('/store',reservationControllers.store);

router.get('/trash',reservationControllers.trash);

router.get('/list',reservationControllers.list);// sua phong
router.get('/:id/edit',reservationControllers.edit);
router.put('/:id',reservationControllers.update);
router.delete('/:id', reservationControllers.delete);//xoa
router.delete('/:id/delete',reservationControllers.harddelete);//xoa
router.patch('/:id/restore', reservationControllers.restore);

router.get('/:roomNumber',reservationControllers.book);



module.exports = router;