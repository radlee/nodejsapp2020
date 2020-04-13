const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const indexData = require('./index');

const router = express.Router();

router.get('/', (req, res, next) => {
    
  const users = indexData.users;

  res.render('users', {  users: users, 
                        pageTitle: 'User Central', 
                        path: '/' , 
                        hasUsers: users.length > 0, 
                        activeShop: true ,
                        userCSS: true
                    });
});

module.exports = router;
