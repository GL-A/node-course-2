const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// })
// Todo.findOneAndRemove({_id: '58e9976ba2eef33cf345c781'})
Todo.findByIdAndRemove('58e9976ba2eef33cf345c781').then((todo) => {
  console.log(todo);
})
