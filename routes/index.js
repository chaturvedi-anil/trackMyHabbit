const express=require('express');
const router = express.Router();
const homeController = require('../controllers/home_controllers');

router.get('/', homeController.home);

router.use('/api', require('./api'));
router.use('/users', require('./users'));
router.use('/habbit', require('./habbits'));


module.exports=router;