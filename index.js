const express = require('express');
const serverConfig = require("./configs/server.config");
const dbConfig = require("./configs/db.config");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const Router = require('./Route/timeData');
const cors = require('cors')
const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
mongoose.connect(dbConfig.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
  app.use(cors());
app.all('/*', function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Max-Age", "1800");
  res.setHeader("Access-Control-Allow-Headers", "content-type");
  res.setHeader("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS");
  if (req.method == 'OPTIONS') {
    res.status(200).end();
  } else {
    next();
  }
});

app.use('/api/v1', Router);

module.exports = app.listen(serverConfig.PORT, ()=>{
    console.log("Application has started on port ", serverConfig.PORT);
})