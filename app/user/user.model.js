// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var userSchema = new Schema({
  name: String,
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: {type: String, required: true},
  likes:[
      {product_id: {type: String, unique: true}},
      {product_name: String},
      {price: Number},
      {experid_date: Date, required: true},
      {rate: Number},
      {quantity: Number}
  ]
});

// the schema is useless so far
// we need to create a model using it
var User = mongoose.model('user', userSchema);

// make this available to our users in our Node applications
module.exports = User;