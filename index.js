const path = require('path');
const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const bodyParser = require('body-parser');

const indexRoute = require('./routes/index');
const usersRoute = require('./routes/users');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/index', indexRoute.routes);
app.use(usersRoute);

app.use((req, res) => {
    res.render('404', {
        pageTitle : '404',
        path : '/index/404',
    });
});

app.listen(3007)