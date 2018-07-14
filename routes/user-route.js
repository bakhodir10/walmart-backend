var express = require('express');
var router = express.Router();
var userService = require('../app/user/user.service');

/* GET users listing. */
router.get('/', userService.list);

/* POST a user. */
router.post('/', userService.save);

/* GET a user. */
router.get('/:id', userService.findOne);

/* DELETE a user. */
router.delete('/:id', userService.delete);

/* UPDATE a user. */
router.put('/:id', userService.update);
module.exports = router;
