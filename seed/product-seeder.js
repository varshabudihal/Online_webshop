var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.set('useNewUrlParser', true);
mongoose.connect('mongodb://localhost:27017/webshop1', {useUnifiedTopology: true});

var products = [
  new Product({
  imagePath:'https://target.scene7.com/is/image/Target/GUEST_f62f8541-65b5-436e-890a-82d334487571?wid=488&hei=488&fmt=pjpeg',
  title: 'Halloween Special TEE',
  description: 'BOO! A special make for the Halloween. This tee is made from pure cotton which is smooth to your delicate skin',
  price: 14.99
}),
  new Product({
  imagePath:'https://bananarepublicfactory.gapfactory.com/webcontent/0017/152/951/cn17152951.jpg',
  title: 'Tshirt from local',
  description: 'TACO TACO TACO!!!!',
  price: 10
}),
  new Product({
  imagePath:'https://cdn.shopify.com/s/files/1/0100/2402/products/Mug_G-Unit_black_logo_600x448_360x.png?v=1549993013',
  title: 'Coffeemug',
  description: 'Gift for someone who loves Coffee!',
  price: 11.99
}),
  new Product({
  imagePath:'https://previews.123rf.com/images/subbotina/subbotina1503/subbotina150300106/38253343-chocolates-background-praline-chocolate-sweets.jpg',
  title: 'Chocolates',
  description: 'Holiday Gift! What a better way to celebrate holidays with family with these amazing chocolates',
  price: 20.99
}),
  new Product({
  imagePath:'https://cakebycourtney.com/wp-content/uploads/2015/11/Chocolate-Strawberry-Nutella-Cake-3-e1550505051658.jpg',
  title: 'Cake',
  description: 'What a better gift idea than a Happy Bday cake! Get this tasty looking cake to cheer the special one on thier special day',
  price: 31.99
}),
  new Product({
  imagePath:'http://www.homeeducatormom.com/wp-content/uploads/2012/11/orange-scarf1.jpg',
  title: 'Scarf',
  description: 'Get this Winter Gift for your loved one to make them warm and cozy and also protect them from the cold outside!',
  price: 15
})

];

var done= 0;
for (var i = 0; i<products.length; i++){
  products[i].save(function(err, result){
    done++;
    if (done==products.length) {
      exit();
    }
  });
}

function exit(){
  mongoose.disconnect();
}
