var express = require('express');
var router = express.Router();
var productService = require('../app/product/product.service');
var userAuthService = require('../app/user/user.Auth.service');

/* GET users listing. */
router.get('/', productService.list);

/* POST a user. */
router.post('/', productService.save);

/* GET a user. */
router.get('/:id', productService.findOne);

/* DELETE a user. */
router.delete('/:id', productService.delete);

/* UPDATE a user. */
router.put('/:id', productService.update);

module.exports = router;
