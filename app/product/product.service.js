
// grab the user model
var Product = require('./product.model');
var productService = {};

// get list of user
productService.list = (req, res) => {
    Product.find({}).exec((err, products) => {
    if(err) throw err;
    console.log(products);
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
  product.rate = 0;
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
  if(req.body.price) query.$set.price = req.body.price;
  if(req.body.quantity) query.$set.quantity = req.body.quantity;
  if(req.body.rate) query.$set.rate= req.body.rate;
  Product.findByIdAndUpdate(req.params.user_id, query, {new: false}, (err, product) => {
    if(err) throw err;
    res.json(req.body);
  });
};

productService.addfeedback = (req, res) => {
  // product.friends.push(req.body);
  // product.save(done);
  console.log("hiiii");
  console.log(req.body);
   const query = {$push:{feedback:req.body}};
  
   Product.findByIdAndUpdate(req.params.id,query,(err,product)=>{
  if(err) res.json(403);
  res.json(req.body);
});
};




module.exports = productService;