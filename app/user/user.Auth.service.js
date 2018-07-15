var nodemailer = require('nodemailer');
const jwt= require('jsonwebtoken');

// grab the user model
var User = require('./user.model');
var userAuthService = {};

userAuthService.checkForToken=(req,res,next)=>{
    const beareHeader = req.headers['authorization'];

    if(typeof bearerHeader !== 'undefined'){
        //Split at the space
        const bearer = beareHeader.split(' ');
        // Get token from array
        const beareToken =beare[1];
        //set the token
        req.token = bearerToken;
        //next middleware
        console.log(req.token);
        next();
    }else{
        res.sendStatus(403);
    }
}

userAuthService.verifyToken=(req,res,next)=>{
    jwt.verify(req.token,'secretkey',(err,authData)=>{
        console.log(authData);
        if(err){
            res.sendStatus(403);
        }else{
            // res.json({
            //     message:'Post creatd...',
            //     authData
            // });
            next();
        }
    })
}

userAuthService.login = (req,res) => {
    const user = {};
    console.log("hi");
    console.log(req.body);
    User.findOne({email: req.body.email,password: req.body.password}).exec((err, data) => {
        // console.log(data);
        if(err) throw err;
        user.name=data.name;
        user.email=data.email;
        user.role=data.role;
      });
      jwt.sign({user},'secretkey',(err,token)=>{
        res.json({
            token
        });
    });
}

userAuthService.hasRole = function(req, res, next){
    // next();
}

module.exports = userAuthService;