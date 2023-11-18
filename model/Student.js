const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    id: {
        type: Number,
        required: [true, "No id provided"]
    },
    firstName: {
        type: String,
        required: [true, "No firstName provided"]
    },
    lastName: {
        type: String,
        required: [true, "No lastName provided"]
    },
    group: Number,
    rate: Number
})

module.exports = mongoose.model('Student', studentSchema)