var express = require('express');
var router = express.Router();
var productService = require('../app/product/product.service');
var userAuthService = require('../app/auth/auth.service');

/* GET users listing. */
router.get('/',productService.list);

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

router.post('/:id/feedback', productService.addfeedback);

module.exports = router;
