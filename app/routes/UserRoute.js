const express = require('express');
const router = express.Router();
const auth = require('../services/AuthService');

const userService = require('../services/UserService')

// user login
router.post('/login', userService.validate('login'), userService.login);

// user register
router.post('/register', userService.validate('register'), async (req, res) => {
    const data = await userService.createUser(req, res);
    if (data) res.status(200).json({ msg: 'user created successfully', uuid: data });
    else res.status(500).json({ msg: 'something went wrong' });
});

// find user
router.get('/:uuid', auth, async (req, resp) => {
    const data = await userService.findUser(req.params.uuid);
    if (data) resp.status(200).json({ user: data });
    else resp.status(500).json({ msg: 'something went wrong' });
});
  
  // list users
router.get('/', auth, async (req, resp) => {
    const data = await userService.listUsers();
    if (data) resp.status(200).json({ users: data });
    else resp.status(500).json({ msg: 'something went wrong' });
});
  

module.exports = router;
