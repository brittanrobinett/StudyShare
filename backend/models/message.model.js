const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const messageSchema = new Schema({
    groupName: { type: Schema.Types.ObjectId, ref: 'Group' },
    sender: { type: Schema.Types.ObjectId, ref: 'User' },
    content: { type: String, required: true }
}, {
        timestamps: true,
    });

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;