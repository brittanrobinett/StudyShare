const router = require('express').Router();
const bcrypt = require('bcrypt');
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

router.route('/register').post( async (req, res) => {
  try {
    const password = await bcrypt.hash(req.body.password, 10);
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const newUser = new User({ firstName, lastName, email, password });
    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
  } catch {
    res.status(500).send();
  }
});

module.exports = router;
