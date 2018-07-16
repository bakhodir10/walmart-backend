// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var productSchema = new Schema({
  name: { type: String, required: true, unique: true },
  price: { type: String, required: true},
  expire_date: { type: Date, required: true },
  quantity: {type: Number},
  feedback:[
      {user_id: String, rate: Number, comment: String, comment_date: Date}
  ]
});

// the schema is useless so far
// we need to create a model using it
var Product = mongoose.model('product', productSchema);

// make this available to our users in our Node applications
module.exports = Product;