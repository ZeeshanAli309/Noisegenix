const mongoose = require('mongoose');

const DB_HOST = process.env.DB_HOST;
const DB_PORT = process.env.DB_PORT;
const DB_NAME = process.env.DB_NAME;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;

const DB_URL = `mongodb://${DB_USER}:${DB_PASSWORD}@ac-wqsd4qz-shard-00-00.t0zzewe.mongodb.net:27017,ac-wqsd4qz-shard-00-01.t0zzewe.mongodb.net:27017,ac-wqsd4qz-shard-00-02.t0zzewe.mongodb.net:27017/?ssl=true&replicaSet=atlas-svkvlm-shard-0&authSource=admin&retryWrites=true&w=majority`;
console.log(DB_URL);

const mongoOpts = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
//connect to mongoDb
mongoose.connect(DB_URL, mongoOpts, (err, res) => {
  if (err) {
    console.error(err);
  } else {
    console.log('\nConnected to the Database.');
  }
});
