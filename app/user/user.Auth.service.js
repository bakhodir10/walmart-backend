var nodemailer = require('nodemailer');
const jwt= require('jsonwebtoken');

// grab the user model
var User = require('./user.model');
var userAuthService = {};

userAuthService.checkForToken=(req,res,next)=>{

    const beareHeader = req.headers['authorization'];
    if(typeof bearerHeader !== undefined){
        //Split at the space
        const bearer = beareHeader.split(" ");
        // Get token from array
        const beareToken = bearer[1];
        //set the token
        req.token = beareToken;
        //next middleware
        next();
    }else{
        res.sendStatus(403);
    }
}

userAuthService.verifyToken=(req,res,next)=>{
    jwt.verify(req.token,'secretkey',(err,authData)=>{
       
        if(err){
            res.sendStatus(403);
        }else{
            next();
        }
    })
}

userAuthService.login = (req, res) => {
   
    const user = {};
    console.log(req.body);
    User.findOne({email: req.body.email, password: req.body.password}).exec((err, data) => {

        if(err) {
            res.sendStatus(403);
        }
        user.name=data.name;
        user.email=data.email;
        user.role=data.role;
        
        jwt.sign({user:user},'secretkey',{expiresIn: '1h'},(err,token)=>{
            res.json({
                token
            });
        });  
    });
}

userAuthService.logout = (req, res) => {
   
        req.token=null;
        res.json("ok");  
    }


userAuthService.hasRole = function(req, res, next){

    jwt.verify(req.token,'secretkey',(err,decoded)=>{
        // if(err) res.json(403);
        if(req.x === decoded.user.role) next();
        res.json(403);
       console.log(req.x+"   "+decoded.user.role);
       
    });
}

module.exports = userAuthService;