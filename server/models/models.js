const mongoose = require('mongoose');
const gigSchema = new mongoose.Schema({
    title: {type:String, required:[true,'Please input a Name']},
    description: {type:String, required:[true,'Please input a Description']}
}, { timestamps: true });
module.exports.Gig = mongoose.gig('Gig', gigSchema);