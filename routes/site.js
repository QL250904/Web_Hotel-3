const express = require('express'); 
const router = express.Router();

const siteControllers = require('../app/controllers/SiteController');

router.get('/aboutus',siteControllers.aboutus);
router.get('/admin', siteControllers.admin);// trang admin

router.get('/', siteControllers.index);
router.post('/', siteControllers.filter);



module.exports = router;