const express = require('express');
const articleCommentService = require('../services/ArticleCommentService');
const auth = require('../services/AuthService');

const router = express.Router({ mergeParams: true });


// create article comment
router.post('/', auth, articleCommentService.validate('createArticleComment'), async (req, resp) => {
  const data = await articleCommentService.createArticleComment(req, resp);
  if (data) resp.status(201).json({ msg: 'comment created successfully', uuid: data });
  else resp.status(500).json({ msg: 'something went wrong' });
});


module.exports = router;
