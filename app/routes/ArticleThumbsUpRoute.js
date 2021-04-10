const express = require('express');
const articleThumbsUpService = require('../services/ArticleThumbsUpService');
const auth = require('../services/AuthService');

const router = express.Router({ mergeParams: true });

// create article thumb up
router.post('/', auth, async (req, resp) => {
  const data = await articleThumbsUpService.createArticleThumbsUp(req.params.uuid, req.user);
  if (data) resp.status(201).json({ msg: `thump up for article with uuid: ${req.params.uuid}`});
  else resp.status(500).json({ msg: 'something went wrong' });
});

module.exports = router;
