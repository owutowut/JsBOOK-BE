const mongoose = require('mongoose');
const { Schema } = mongoose;

const loanSchema = new Schema(
    {
        bid: {
            type: String,
            required: true
        },
        lname:{
            type: String,
            required: true
        },
        IDcard: {
            type: String,
            required: true
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
            required: false,
            default: '--------'
        },
        lstatus: {
            type: String,
            required: true
        },
    },
    { collection: 'loans' }
);

module.exports = mongoose.model('loan', loanSchema);