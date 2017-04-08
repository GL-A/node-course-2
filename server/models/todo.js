var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minLength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});
module.exports = {Todo};
// var newTodo = new Todo({
//   text: 'Cook dinner'
// });
// newTodo.save().then((doc) => {
//   console.log('Saved todo', doc)
// }, (e) => {
//   console.log('Unable to save todo');
// })
// var secondTodo = new Todo({
//   text: 'Study',
//   completed: false,
//   completedAt: 1
// });
// var secondTodo = new Todo({
//   text: '  Studying    ',
// });
// secondTodo.save().then((doc) => {
//   console.log(JSON.stringify(doc, undefined, 1));
// }, (e) => {
//   console.log('unable to save secondTodo');
// });
// user
// email - required-trim it -set type
