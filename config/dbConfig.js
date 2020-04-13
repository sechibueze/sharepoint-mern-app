const mongoose = require('mongoose');

function dbConnection(params) {
  let uri = process.env.MONGODBURI || 'mongodb://localhost:27017/educatus-mern-app';
  mongoose.connect(uri, {
    useFindAndModify: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  }, (err) => {
    if (err ) return console.log('Failed to connect to DB', err);
    console.log('connected to DB', uri);
  });
}

module.exports = dbConnection;