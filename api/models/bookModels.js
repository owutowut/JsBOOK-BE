const mongoose = require('mongoose');
const { Schema } = mongoose;

const bookSchema = new Schema(
    {
        bname: {
            type: String,
            required: true
        },
        cover: {
            type: String,
            required: false
        },
        description: {
            type: String,
            required: true
        },
        author: {
            type: String,
            required: true
        },
        year: {
            type: String,
            required: true
        },
        category: {
            type: String,
            required: true
        },
        status: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
    },
    { collection: 'books' }
);

module.exports = mongoose.model('book', bookSchema);