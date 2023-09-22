require('../config/database');
const mongoose = require('mongoose');

const enquirySchema = mongoose.Schema({
    enquirerid: {
        type: String,
        required: true
    },
    dealerid: {
        type: String,
        required: true
    },
    carid: {
        type: String,
        required: true
    },
    ack: {
        type: Boolean,
        default: false
    }
});

const enquiry = mongoose.model('enquiry', enquirySchema);
module.exports = enquiry;