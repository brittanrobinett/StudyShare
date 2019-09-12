const router = require('express').Router();
let Group = require('../models/group.model');

// pre: There are groups
// post: Return array of all group objects
router.route('/').get((req, res) => {
    Group.find()
        .then(groups => res.json(groups))
        .catch(err => res.status(400).json('Error: ' + err));
});

// pre: groupName on group creation page
// post: Create new group object using name inputted by user
router.route('/add').post((req, res) => {
    const groupName = req.body.groupName;

    const newGroup = new Group({ groupName });

    newGroup.save()
        .then(() => res.json('Group created!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
