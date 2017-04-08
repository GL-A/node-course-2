// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('unable to connect to server');
  }
  console.log('connected to server')

  // db.collection('Todos').find({
  //   _id: new ObjectID('58e83ea688b1c5018382ba6b')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 1));
  // }, (err) => {
  //   console.log('Unable ot fetch todos', err);
  // })
  // db.collection('Todos').find().count().then((count) => {
  //   console.log('Todos', count);
  // }, (err) => {
  //   console.log('Unable ot fetch todos', err);
  // })
  db.collection('Users').find({name: 'Billy'}).toArray().then((docs) => {
    console.log('Todos');
    console.log(JSON.stringify(docs, undefined, 1));
  }, (err) => {
    console.log('Unable ot fetch todos', err);
  })
  // db.close();
});
