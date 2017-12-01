var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Product = mongoose.model('Product');

router.get('/inventory',function(req,res,next){
	Product.find(function(err, inventory){
		if(err){return next(err);}
		res.json(inventory);
	});
});


router.post('/inventory', function(req,res,next){
	var product = new Product(req.body);
	product.save(function(err,product){
		if(err){return next(err);}
		res.json(product);
	});
});


router.param('product', function(req,res,next,id) {
	var query = Product.findById(id);
	query.exec(function(err,product){
		if(err){return next(err);}
		if(!product){return next(new Error("can't find product"));}
		req.product = product;
		return next();
	});
});

router.get('/inventory/:product',function(req,res) {
	res.json(req.product);
});

router.put('/inventory/:product/order',function(req,res,next){
	req.product.order(function(err,product){
		if(err){return next(err);}
		res.json(product);
	});
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
