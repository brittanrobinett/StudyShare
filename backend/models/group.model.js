const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const groupSchema = new Schema({
    groupName: { type: String, required: true, trim: true },
    creator: { type: Schema.Types.ObjectId, ref: 'User' },
    users: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    messages: [{ type: Schema.Types.ObjectId, ref: 'Message' }]
}, {
        timestamps: true,
    });

const Group = mongoose.model('Group', groupSchema);

module.exports = Group;