const router = require('express').Router();
let Message = require('../models/message.model');

router.route('/').get((req, res) => {
    Message.find()
        .then(messages => res.json(messages))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const content = req.body.content;

    const newMessage = new Message({ content });

    newMessage.save()
        .then(() => res.json('Message created!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;