const md5 = require('md5');
const { v4: uuidv4 } = require('uuid');
const { user, sequelize } = require('../models');
const jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator'); 


exports.login = async (req, res) => {
    // const { jwtSecretKey } = config.app.jwt.secret_key;

    const errors = validationResult(req); 
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array().map(e => e.msg) });
        return;
    }
    const { username, password } = req.body;
  
    const hashedPassword = md5(password);
    const foundUser = await user.findOne({
      where:
      { username, password: hashedPassword },
    });
  
    if (foundUser === null) {
      res.status(400).json({ msg: 'user not found!' });
    } else {
      const tokenData = { uuid: foundUser.uuid };
      const token = jwt.sign({ tokenData }, 'vkbhd9HNqpz46ePwq6pKaWJz1ME7GXnJQqRXIpTqNmOp8BJR2Ya4uyPoYQlGHdX');
      res.json({
          token,
          userUUID: foundUser.uuid
      });
    }
};

exports.createUser = async (request, res) => {

    const errors = validationResult(request); 
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array().map(e => e.msg) });
        return;
    }

    const {
        username, password, name, jobTitle,
      } = request.body;
      const uuid = uuidv4();
      return user.create({
        uuid,
        username,
        password: md5(password),
        name,
        job_title: jobTitle,
        created_at: sequelize.literal('CURRENT_TIMESTAMP'),
        created_by: uuid,
      }).then((data) => uuid).catch((error) => console.log('error: ', error));
};

exports.findUser = (userUUID) => {
    return user.findOne({where: {uuid: userUUID}})
        .then((data) => data).catch((err) => console.log(err));
};

exports.listUsers = () => {
    return user.findAll()
      .then((data) => data).catch((err) => console.log(err));
};

exports.validate = (method) => {
    switch (method) {
      case 'login': {
       return [ 
          body('username', 'username should exist').exists(),
          body('password', 'password should exist').exists(),
         ]   
      }
      case 'register': {
        return [
          body('username', 'username should exist').exists(),
          body('password', 'password should exist').exists(),
          body('name', 'name should exist').exists(),
        ]
      }
    }
  }