const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const dotenv = require('dotenv');
dotenv.config();

mongoose.connect(
    process.env.MONGO_URI,
    {useNewUrlParser: true, useUnifiedTopology: true}
  )
  .then(() => console.log('DB Connected'))
  .catch(err => console.log(err));

mongoose.connection.on('error', err => {
    console.log(`DB connection error: ${err.message}`);
});

const postRoutes = require('./routes/post');

app.use(morgan("dev"));

app.use('/', postRoutes);

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`A Node JS API is listening on port: ${port}`);
});