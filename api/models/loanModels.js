const mongoose = require('mongoose');
const { Schema } = mongoose;

const loanSchema = new Schema(
    {
        bname: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        cover: {
            type: String,
            required: false
        },
        IsDate: {
            type: String,
            required: true
        },
        DueDate: {
            type: String,
            required: true
        },
        ReDate: {
            type: String,
            required: false
        },
        status: {
            type: String,
            required: true
        },
    },
    { collection: 'loans' }
);

module.exports = mongoose.model('loan', loanSchema);