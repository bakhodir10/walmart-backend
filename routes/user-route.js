var express = require('express');
var router = express.Router();
var userService = require('../app/user/user.service');

/* GET users listing. */
router.get('/', userService.list);

/* POST a user. */
router.post('/', userService.save);

/* SEND notification to customers*/
router.get('/notify', userService.sendNotification);

/* GET a user. */
router.get('/:id', userService.findOne);

/* DELETE a user. */
router.delete('/:id', userService.delete);

/* UPDATE a user. */
router.put('/:id', userService.update);

/* CREATE user's new liked product. */
router.put('/:user_id/like', userService.createNewLikedProduct);

/* DELETE user's liked product. */
router.put('/:user_id/dislike/:product_id', userService.deleteLikedProduct);

module.exports = router;
