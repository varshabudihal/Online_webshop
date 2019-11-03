var express = require('express');
var router = express.Router();
var Product = require('../models/product');
var Cart = require('../models/cart');
//var csrf = require('csurf');

//var csrfProtection = csrf();
//router.use(csrfProtection);

/* GET home page. */
router.get('/', function(req, res, next) {
Product.find(function(err, docs){
  var productChunks = [];
  var chunkSize = 3;
  for (var i = 0; i< docs.length; i+= chunkSize){
    productChunks.push(docs.slice(i, i + chunkSize));
  }
  res.render('shop/index', { title: 'Online webshop', products: productChunks });
});

});

router.get('/add-to-cart/:id', function(req, res, next){
  var productID = req.params.id;
  var cart = new Cart(req.session.cart? req.session.cart : {});

  Product.findById(productID, function(err,product){
    if(err){
      return res.redirect('/');
    }
    cart.add(product, product.id);
    req.session.cart = cart;
    console.log(req.session.cart);
    res.redirect('/');
  });
});

router.get('/remove-from-cart/:id', function(req, res, next){
  var productID = req.params.id;
  var cart = new Cart(req.session.cart? req.session.cart : {});

  Product.findById(productID, function(err,product){
    if(err){
      res.redirect('/shopping-cart');
    }
    cart.remove(product, product.id);
    req.session.cart = cart;
    console.log(req.session.cart);
    res.redirect('/shopping-cart');
  });
});

router.get('/remove-all-from-cart/:id', function(req, res, next){
  var productID = req.params.id;
  var cart = new Cart(req.session.cart? req.session.cart : {});

  Product.findById(productID, function(err,product){
    if(err){
      res.redirect('/shopping-cart');
    }
    cart.removeAll(product, product.id);
    req.session.cart = cart;
    console.log(req.session.cart);
    res.redirect('/shopping-cart');
  });
});

router.get('/shopping-cart', function(req, res, next){
  if(!req.session.cart){
    return res.render('shop/shopping-cart', {products: null});
  }

  var cart = new Cart(req.session.cart);
  res.render('shop/shopping-cart', {products: cart.generateArray(), totalPrice: cart.totalPrice});
});

module.exports = routes;
