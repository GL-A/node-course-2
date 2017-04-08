const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

// var id = '58e956cf2232b444d044c6cd';
// if(!ObjectID.isValid(id)){
//   console.log('Id not valid');
// }
//
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('todos', todos);
// });
// Todo.findOne({
//   _id: id
// }).then((todos) => {
//   console.log('todos', todos);
// });
// 
// Todo.findById(id).then((todos) => {
//   if (!todos) {
//     return console.log('id not found');
//   }
//   console.log('todos by id', todos);
// }).catch((e) => console.log(e));
