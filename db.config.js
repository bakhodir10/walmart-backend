var mongoose = require('mongoose');

mongoose.connect('mongodb://mwa:12345mum@ds137631.mlab.com:37631/walmart', {useNewUrlParser: true})
  .then(() =>  console.log('connection to the db is succesful'))
  .catch((err) => console.error(err));