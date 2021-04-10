const express = require('express');
const articleService = require('../services/ArticleService');
const auth = require('../services/AuthService');
const router = express.Router();

// create article
router.post('/', auth, articleService.validate('createArticle'), async (req, resp) => {
  const data = await articleService.createArticle(req, resp);
  if (data) resp.status(201).json({ msg: 'article created successfully', uuid: data });
  else resp.status(500).json({ msg: 'something went wrong' });
});

// find article
router.get('/:uuid', auth, async (req, resp) => {
  const data = await articleService.findArticle(req.params.uuid);
  if (data) resp.status(200).json({ article: data });
  else resp.status(500).json({ msg: 'something went wrong' });
});

// list articles
router.get('/', auth, async (req, resp) => {
  const data = await articleService.listArticles();
  if (data) resp.status(200).json({ articles: data });
  else resp.status(500).json({ msg: 'something went wrong' });
});

// search articles
router.post('/search', auth, async (req, resp) => {
  const data = await articleService.searchArticles(req.body);
  if (data) resp.status(200).json({ articles: data });
  else resp.status(500).json({ msg: 'something went wrong' });
});

// router.use('/:uuid/comment', require('./ArticleCommentRoute'));

module.exports = router;
