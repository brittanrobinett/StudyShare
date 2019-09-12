const router = require('express').Router();
const bcrypt = require('bcrypt');
let User = require('../models/user.model');

router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

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

router.route('/login').post( async (req, res) => {
  User.findOne({ email: req.body.email })
    .then(user => {
      bcrypt.compare(req.body.password, user.password, function (err, result) {
        if(result == true){
          res.send('Logged in');
        } else {
          res.send('Authentication Failed');
        }
      })
    })
    .catch(err => res.send('Authentication Failed'));
});

module.exports = router;
