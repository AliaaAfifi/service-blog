const { v4: uuidv4 } = require('uuid');
const { article, sequelize } = require('../models');
const Sequelize = require('sequelize');
const { body, validationResult } = require('express-validator'); 


exports.createArticle = (request, res) => {
    const errors = validationResult(request); 
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array().map(e => e.msg) });
        return;
    }

    const userUUID = request.user;
    const {
      title, body
    } = request.body;
    const uuid = uuidv4();
    return article.create({
      uuid,
      user_uuid: userUUID,
      title,
      body,
      created_at: sequelize.literal('CURRENT_TIMESTAMP'),
      created_by: userUUID,
    }).then((data) => uuid).catch((err) => console.log(err));
};
  
exports.findArticle = (articleUUID) => {
    return article.findOne({where: {uuid: articleUUID}})
        .then((data) => data).catch((err) => console.log(err));
};

exports.listArticles = () => {
    return article.findAll()
      .then((data) => data).catch((err) => console.log(err));
};

exports.searchArticles = (request) => {
    const {
        title, body
      } = request;
    return article.findAll({
        where: {
            [Sequelize.Op.and]: [
                {title: {[Sequelize.Op.like]: `%${title ? title : ''}%` }},
                {body: {[Sequelize.Op.like]: `%${body ? body : ''}%`}}
            ]
        }
    })
};

exports.validate = (method) => {
    switch (method) {
      case 'createArticle': {
       return [ 
          body('title', 'title of the article should exist').exists(),
          body('body', 'body of the article should exist').exists(),

         ]   
      }
    }
  }