
// grab the user model
var User = require('./user.model');
var userService = {};

// get list of user
userService.list = (req, res) => {
  User.find({}).exec((err, users) => {
    // console.log(users);
    if(err) throw err;
    return users;
  });
};

// save a user
userService.save = (req, res) => {
  console.log(req.body);
  var user  = new User();
  user.name = req.body.name;
  user.email = req.body.email;
  user.password = req.body.password;
  user.role = req.body.role;
  user.likes = req.body.likes;
  user.save(err => {
    if(err) throw err;
    return user;
  });
};


module.exports = userService;