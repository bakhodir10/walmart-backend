var express = require('express');
var router = express.Router();
var userAuthService = require('../app/user/user.auth.service');

/* GET users listing. */
router.post('/login', (req, res, next) => {
    console.log(req.body);
    res.json('hey');
});

/* POST a user. */
// router.post('/logout', userAuthService.logout);

module.exports = router;