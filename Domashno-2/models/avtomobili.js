const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    maker: {
        type: String,
        required: true,
    },
    model: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
        min: 2010,
        max: 2015,
    },
    color: {
        type: String,
    },
    price: {
        type: Number,
        required: true,
        min: [15000, 'Price must be at least 15000'],
        max: [20000, 'Price cannot exceed 20000'],
    },
    available: {
        type: Boolean,
        default: true
    },
}, { timestamps: true });;

const Car = mongoose.model('Car', carSchema);

module.exports = Car;