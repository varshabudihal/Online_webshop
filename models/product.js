<<<<<<< HEAD
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
imagePath:{type: String, required: true},
title:{type: String, required: true},
description:{type: String, required: true},
price:{type: Number, required: true}
});

module.exports = mongoose.model('Product', schema);
=======
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
imagePath:{type: String, required: true},
title:{type: String, required: true},
description:{type: String, required: true},
price:{type: Number, required: true}
});

module.exports = mongoose.model('Product', schema);
>>>>>>> 96a6cf65ab3db2402de34167be03ad6b892017f1
