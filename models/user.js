var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//mongoose.set('useNewUrlParser', true);
//mongoose.set('useUnifiedTopology', true);

var userSchema = new Schema({
  email:{type: String, required:true},
  password:{type: String, required:true}
});
module.exports = mongoose.model('User', userSchema);
