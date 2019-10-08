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

router.route('/').get((req, res) => {
  console.log("top of get");
  User.findOne({ _id: req.session.userId }) // FIX: not able to find session / user
    .then(user => {
      console.log(req.session.userId);
      res.send(user);
    })
    .catch(err => {
      res.send(err);
    })

});

router.route('/logout').post((req, res) => {
  //req.session.destroy(err => {
  //  if (err) {
  //    return res
  //  }
 //  })
})

module.exports = router;
