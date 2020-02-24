require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const app = express();
const routes = require('./api/routes/routes');
const secureRoute = require('./api/routes/secure-routes');
require('../config/auth');
require('../config/db');

app.use( bodyParser.urlencoded({ extended : false }) );
app.use('/', routes);
app.use('/user', passport.authenticate('jwt', { session : false }), secureRoute );

app.use(function(err, req, res) {
    res.status(err.status || 500);
    res.json({ error : err });
});

app.listen(3001, () => {
    console.log('Server started')
});