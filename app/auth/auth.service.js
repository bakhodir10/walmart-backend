var nodemailer = require('nodemailer');
const jwt= require('jsonwebtoken');

// grab the user model
var User = require('../user/user.model');
var authService = {};

authService.checkForToken=(req, res, next)=>{

    const beareHeader = req.headers['authorization'];
    console.log(beareHeader);
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

authService.verifyToken=(req, res, next)=>{
    jwt.verify(req.token,'secretkey',(err,authData)=>{
       
        if(err){
            res.sendStatus(403);
        }else{
            next();
        }
    })
}

authService.login = (req, res) => {
   
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

authService.logout = (req, res) => {
    
        req.token=null;
        res.json("ok");  
    }


authService.hasRole = function(req, res, next){
    y:boolean=false;
    jwt.verify(req.token,'secretkey',(err,decoded)=>{
        for(let i=0;i<req.x.length;i++){
            if(req.x[i] === decoded.user.role)
                this.y=true;
        }

        if(this.y){
            next();
        }else res.json(403);
       
    });
}

module.exports = authService;