const express = require('express');
const app = express();
const morgan = require('morgan');

const { getPosts } = require('./routes/post');

const myOwnMiddleware = (req, res, next) => {
    console.log('middleware applied!');
    next();
};

app.use(morgan("dev"));
app.use(myOwnMiddleware);

app.get('/', getPosts);

const port = 8080;
app.listen(port, () => {
    console.log(`A Node JS API is listening on port: ${port}`);
});