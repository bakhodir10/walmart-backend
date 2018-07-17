var express = require('express');
var router = express.Router();
var productService = require('../app/product/product.service');
var userAuthService = require('../app/user/user.Auth.service');

/* GET users listing. */
router.get('/', userAuthService.checkForToken, userAuthService.verifyToken,productService.list);

/* POST a user. */
router.post('/', userAuthService.checkForToken, userAuthService.verifyToken,(req,res,next)=>{req.x=['manager','employee'];next();},
userAuthService.hasRole,productService.save);

/* GET a user. */
router.get('/:id', userAuthService.checkForToken, userAuthService.verifyToken,productService.findOne);

/* DELETE a user. */
router.delete('/:id', userAuthService.checkForToken, userAuthService.verifyToken,(req,res,next)=>{req.x=['manager','employee'];next();},
userAuthService.hasRole, productService.delete);

/* UPDATE a user. */
router.put('/:id', userAuthService.checkForToken, userAuthService.verifyToken,(req,res,next)=>{req.x=['manager','employee'];next();},
userAuthService.hasRole, productService.update);

module.exports = router;
