const { ArticleComment, sequelize } = require('../models');
// const { articleComment } = require('../models/ArticleComment');
const Sequelize = require('sequelize');
const { body, validationResult } = require('express-validator'); 
// const articleComment  = require('../models/index').ArticleComment;

// const models = require('../models');
// const article = models.article;

exports.createArticleComment = (request, res) => {

    const errors = validationResult(request); 
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array().map(e => e.msg) });
        return;
    }

    const articleUUID = request.params.uuid;
    const userUUID = request.user;

    const {
        body
    } = request.body;
    console.log({ArticleComment});
    // console.log({article});
    // console.log({articleThumbsUp});

    return ArticleComment.create({
      user_uuid: userUUID,
      article_uuid: articleUUID,
      body,
      created_at: sequelize.literal('CURRENT_TIMESTAMP'),
      created_by: userUUID,
    }).then((data) => uuid).catch((err) => console.log(err));
  };
  

  exports.validate = (method) => {
    switch (method) {
      case 'createArticleComment': {
       return [ 
          body('body', 'body of the article comment should exist').exists(),

         ]   
      }
    }
  }