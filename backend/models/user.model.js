const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, unique: true },
    password: { type: String, required: true },
    groups: [{ type: Schema.Types.ObjectId, ref: 'Group' }]
}, {
        timestamps: true,
    });

const User = mongoose.model('User', userSchema);

module.exports = User;
