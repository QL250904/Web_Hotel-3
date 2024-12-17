const express = require('express'); 
const router = express.Router();

const messageControllers = require('../app/controllers/MessageControllers');


router.post('/store',messageControllers.store);

router.get('/list',messageControllers.list);// sua phong


module.exports = router;