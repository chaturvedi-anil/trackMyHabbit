const express = require('express');
const router = express.Router();
const passport = require('passport');
const userController = require('../controllers/users_controller');

router.get('/sign_in',userController.signIn);
router.get('/sign_up', userController.singUp);
router.get('/profile:id', passport.checkAuthentication ,userController.profile);

module.exports = router;