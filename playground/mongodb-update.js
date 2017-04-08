// const MongoClient = require('mongodb').MongoClient;
// const {MongoClient, ObjectID} = require('mongodb');
//
// MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
//   if(err) {
//     return console.log('unable to connect to server');
//   }
//   console.log('connected to server')
//
//   db.collection('Users').findOneAndUpdate({
//     _id: new ObjectID('58e83f6f45d468023adb1d91')
//   }, {
//     $set: {
//       name: 'Pablo'
//     },
//     $inc: {
//       age: 1
//     }
//   }, {
//     returnOriginal: false
//   }).then((result) => {
//     console.log(result);
//   });
//
// });
