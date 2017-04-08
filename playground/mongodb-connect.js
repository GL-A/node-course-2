// const MongoClient = require('mongodb').MongoClient;
// const {MongoClient, ObjectID} = require('mongodb');
//
// MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
//   if(err) {
//     return console.log('unable to connect to server');
//   }
//   console.log('connected to server')
//
//   // db.collection('Todos').insertOne({
//   //   text: 'Something to do',
//   //   completed: false
//   // },(err, result) => {
//   //   if(err){
//   //     return console.log('Unable to insert todo', err);
//   //   }
//   //   console.log(JSON.stringify(result.ops, undefined, 1));
//   // });
//   // db.collection('Users').insertOne({
//   //   name: 'George',
//   //   age: 22,
//   //   location: 'Provo'
//   // }, (err, result) => {
//   //   if (err) {
//   //     console.log('unable to insert user', err);
//   //   }
//   //   console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
//   // })
//   db.close();
// });
