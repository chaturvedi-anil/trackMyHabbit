const express=require('express');
const router= express.Router();
const habbitController = require('../controllers/habbits_controller');

router.get('/dashboard', habbitController.showDashboard);
router.post('/add-new-habbit',habbitController.addNewHabbit);

module.exports = router;