const express = require('express');
const router = express.Router();
const userController = require('../controllers/users_controller');

router.get('/sign_in', userController.signIn);
router.get('/sign_up', userController.singUp);
router.get('/profile', userController.profile);

module.exports = router;