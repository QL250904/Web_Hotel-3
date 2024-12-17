const express = require('express'); 
const router = express.Router();

const userControllers = require('../app/controllers/UserControllers');


router.get('/create',userControllers.create);//trang signup
router.post('/store',userControllers.store);

router.get('/login',userControllers.login);
router.post('/check',userControllers.check);

router.get('/list',userControllers.list);// sua phong
router.delete('/:id',userControllers.delete);//xoa

module.exports = router;