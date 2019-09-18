const router = require('express').Router();
const bcrypt = require('bcrypt');
const session = require('express-session');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo')(session);
let User = require('../models/user.model');

const SESS_NAME = 'sid';
const SESS_SECRET = 'youshouldchangethis'
const IN_PROD = false;

//router.use(session({
  //name: SESS_NAME,
  //resave: false,
  //store: new MongoStore({ mongooseConnection: mongoose.connection }),
  //saveUninitialized: false,
  //secret: SESS_SECRET,
  //cookie: {
  //    sameSite: true,
  //    secure: IN_PROD,
  //}
//}));

//router.route('/').get((req, res) => {
//
//});

router.route('/').post((req, res) => {
  User.findOne({ email: req.body.email })
    .then(user => {
      bcrypt.compare(req.body.password, user.password, function (err, result) {
        console.log("after compare");
        if(result == true){
          res.send('Logged in');
          //req.session.userId = userId;
          //res.send(userId);
        } else {
          res.send('Authentication Failed');
        }
      })
    })
    .catch(err => res.send('Authentication Failed'));
});

module.exports = router;
