const router = require('express').Router();
const session = require('express-session');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo')(session);
let User = require('../models/user.model');

const SESS_NAME = 'sid';
const SESS_SECRET = 'youshouldchangethis'
const IN_PROD = false;

router.use(session({
  name: SESS_NAME,
  resave: false,
  store: new MongoStore({ mongooseConnection: mongoose.connection }),
  saveUninitialized: false,
  secret: SESS_SECRET,
  cookie: {
      sameSite: true,
      secure: IN_PROD,
  }
}));

//router.route('/').get((req, res) => {
//  User.findOne({ _id: req.session.userId })
//    .then(user => {
//      res.send(user);
//    })
//    .catch(err => res.send(err));
//
//});

module.exports = router;
