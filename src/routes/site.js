const express = require('express');
const router = express.Router();

const siteControllers = require('../app/controllers/SiteControllers');


router.use('/search',siteControllers.Search);
router.use('/',siteControllers.Home);


module.exports = router
