
// grab the user model
var User = require('./user.model');
var userService = {};

// get list of user
userService.list = (req, res) => {
  User.find({}).exec((err, users) => {
    if(err) throw err;
    res.json(users);
  });
};

// save a user
userService.save = (req, res) => {
  var user  = new User();
  user.name = req.body.name;
  user.email = req.body.email;
  user.password = req.body.password;
  user.role = req.body.role;
  user.likes = req.body.likes;
  user.save(err => {
    if(err) throw err;
    res.json({ message: 'User added successfully!', data: user });
  });
};

// get a user
userService.findOne = (req, res) => {
  User.findOne({_id: req.params.id}).exec((err, user) => {
    if(err) throw err;
    res.json(user);
  });
};

// remove a user with id
userService.delete = (req, res) => {
  User.findByIdAndRemove({_id: req.params.id}, (err) => {
    if(err) throw err;
    res.json('the user deleted successfully...!');
  });
};

// update a user with id
userService.update = (req, res) => {
  const query = {$set:{}};
  if(req.body.name) query.$set.name = req.body.name;
  if(req.body.email) query.$set.email = req.body.email;
  if(req.body.password) query.$set.password = req.body.password;
  if(req.body.role) query.$set.role = req.body.role;
  User.findByIdAndUpdate(req.params.id, query, {new: false}, (err, updatedUser) => {
    if(err) throw err;
    res.json(req.body);
  });
};

module.exports = userService;