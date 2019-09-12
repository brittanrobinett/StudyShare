const router = require('express').Router();
let Group = require('../models/group.model');

router.route('/').get((req, res) => {
    Group.find()
        .then(groups => res.json(groups))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const groupName = req.body.groupName;

    const newGroup = new Group({ groupName });

    newGroup.save()
        .then(() => res.json('Group created!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;