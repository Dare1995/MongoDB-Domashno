const mongoose = require("mongoose");

const librarySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        required: true,
    },
    available: {
        type: Boolean,
        default: true
    },
    publishedDate: {
        type: String,
    }, 
}, { timestamps: true });

const Book = mongoose.model('Book', librarySchema);

module.exports = Book;