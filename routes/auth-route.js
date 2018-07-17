var express = require('express');
var router = express.Router();
var userAuthService = require('../app/auth/auth.service');

/* GET users listing. */
router.post('/login', userAuthService.login);

/* POST a user. */
router.post('/logout', userAuthService.logout);

module.exports = router;
