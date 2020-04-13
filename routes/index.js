const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const users = [];

// /index/add-user => GET
router.get('/add-user', (req, res, next) => {
  res.render('add-user', { 
      pageTitle: 'Add user', 
      path: '/index/add-user', 
      formsCSS: true, 
      userCSS: true, 
      activeAddUser: true 
    });
});

// /index/add-user => POST
router.post('/add-user', (req, res, next) => {
  users.push({ title: req.body.title });
  res.redirect('/');
});

exports.routes = router;
exports.users = users;
