const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
id : { type:  Number, description: "Required Field", required: true },
name : { type:  String, description: "Required Field", required: true },
email : { type:  String, description: "Required Field", required: true },
});

module.exports = mongoose.model('user', userSchema);