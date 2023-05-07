const express = require('express');
const router = express.Router();
const userApi = require('../../../controllers/api/users');

router.post('/create-session', userApi.createSession);

module.exports= router;