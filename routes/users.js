const express = require('express');
const router = express.Router();
const passport = require('passport');
const userController = require('../controllers/users_controller');



router.get('/sign-in', userController.signIn);
router.get('/sign-up', userController.singUp);
router.get('/profile', passport.checkAuthentication, userController.profile);

router.post('/create', userController.createUser);

router.post('/create-session', passport.authenticate(
    'local',
    {failuerRedirect: '/users/sing-in'}
),userController.createSession);

router.get('/destroy-session', userController.destroySession);

module.exports = router;