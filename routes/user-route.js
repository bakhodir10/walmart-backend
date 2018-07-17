var express = require('express');
var router = express.Router();
var userService = require('../app/user/user.service');
var userAuthService = require('../app/user/user.Auth.service');

/* GET users listing. */
router.get('/', userAuthService.checkForToken, userAuthService.verifyToken,(req,res,next)=>{req.x=['manager'];next();},
                userAuthService.hasRole, userService.list);

/* POST a user. */
router.post('/',userService.save);

/* SEND notification to customers*/
router.get('/notify', userAuthService.checkForToken, userAuthService.verifyToken,(req,res,next)=>{req.x=['manager'];next();},
userAuthService.hasRole, userService.sendNotification);

/* GET a user. */
router.get('/:id', userAuthService.checkForToken, userAuthService.verifyToken,(req,res,next)=>{req.x=['manager'];next();},
userAuthService.hasRole, userService.findOne);

/* DELETE a user. */
router.delete('/:id', userAuthService.checkForToken, userAuthService.verifyToken,(req,res,next)=>{req.x=['manager'];next();},
userAuthService.hasRole, userService.delete);

/* UPDATE a user. */
router.put('/:id',  userAuthService.checkForToken, userAuthService.verifyToken,(req,res,next)=>{req.x=['manager'];next();},
userAuthService.hasRole,userService.update);

/* CREATE user's new liked product. */
router.put('/:user_id/like', userAuthService.checkForToken, userAuthService.verifyToken,(req,res,next)=>{req.x=['customer'];next();},
userAuthService.hasRole, userService.createNewLikedProduct);

/* DELETE user's liked product. */
router.put('/:user_id/dislike/:product_id', userAuthService.checkForToken, userAuthService.verifyToken,(req,res,next)=>{req.x=['customer'];next();},
userAuthService.hasRole, userService.deleteLikedProduct);

module.exports = router;
