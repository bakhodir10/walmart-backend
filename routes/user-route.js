var express = require('express');
var router = express.Router();
var userService = require('../app/user/user.service');

/* GET users listing. */
router.get('/', (req, res, next) => {
    var result = userService.list(req, res);
    console.log(result);
    res.json(result);
});

///* POST a user data. */
router.post('/', (req, res, next) => {
    var user = userService.save(req, res);
    res.json({ message: 'User added successfully!', data: user });
});

module.exports = router;
