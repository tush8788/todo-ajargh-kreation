const mongoose = require('mongoose');

mongoose.set('strictQuery',false);

mongoose.connect(process.env.MONGO_URL || 'mongodb://localhost/ajargh-kreation-todo-api');

const db = mongoose.connection;

db.on('err',()=>{console.log("error in connect with DB")});

db.once('open',()=>{console.log('successfully connect with db')});

module.exports = db;