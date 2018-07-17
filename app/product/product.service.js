
// grab the user model
var Product = require('./product.model');
var productService = {};

// get list of user
productService.list = (req, res) => {
    Product.find({}).exec((err, products) => {
    if(err) throw err;
    res.json(products);
  });
};

// save a product
productService.save = (req, res) => {
  
  var product  = new Product();
  product.name = req.body.name;
  product.price = req.body.price;
  product.expire_date = req.body.expire_date;
  product.quantity = req.body.quantity;
  product.save(err => {
    if(err) throw err;
    res.json({ message: 'product added successfully!', data: product });
  });
};

// get a product with id
productService.findOne = (req, res) => {
    Product.findOne({_id: req.params.id}).exec((err, product) => {
    if(err) throw err;
    res.json(product);
  });
};

// remove a user with id
productService.delete = (req, res) => {
    Product.findByIdAndRemove({_id: req.params.id}, (err) => {
    if(err) throw err;
    res.json('the product deleted successfully...!');
  });
};

// update a user with id
productService.update = (req, res) => {
  const query = {$set:{}};
  if(req.body.name) query.$set.name = req.body.name;
  if(req.body.email) query.$set.email = req.body.email;
  if(req.body.password) query.$set.password = req.body.password;
  if(req.body.role) query.$set.role = req.body.role;
  Product.findByIdAndUpdate(req.params.user_id, query, {new: false}, (err, product) => {
    if(err) throw err;
    res.json(req.body);
  });
};

module.exports = productService;