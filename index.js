const express = require('express');
const cors = require('cors');
const config = require('./config/index.js');

const app = express();
const { port } = config.app;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use('/user', require('./app/routes/UserRoute'));
app.use('/article/:uuid/comment', require('./app/routes/ArticleCommentRoute'));
app.use('/article/:uuid/thumb-up', require('./app/routes/ArticleThumbsUpRoute'));
app.use('/article', require('./app/routes/ArticleRoute'));

app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});
