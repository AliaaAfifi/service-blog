const { sequelize } = require('../models');
// const { articleComment } = require('../models/ArticleComment');
// const Sequelize = require('sequelize');
// const articleComment  = require('../models/index').ArticleComment;

const models = require('../models');
const articleThumbsUp = models.articleThumbsUp;

exports.createArticleThumbsUp = (articleUUID, userUUID) => {
    console.log({articleThumbsUp});
    // console.log({article});
    // console.log({articleThumbsUp});

    return articleThumbsUp.create({
      user_uuid: userUUID,
      article_uuid: articleUUID,
      created_at: sequelize.literal('CURRENT_TIMESTAMP'),
      created_by: userUUID,
    }).then((data) => uuid).catch((err) => console.log(err));
  };
  