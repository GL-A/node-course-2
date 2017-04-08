var mongoose = require('mongoose');
var User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    minLength: 1,
    trim: true
  }
});
module.exports = {User};
// var newUser = new User({
//   email: '     paco@paco.com'
// });
// newUser.save().then((doc) => {
//   console.log('Saved user', doc);
// }, (e) => {
//   console.log('user not saved');
// });
