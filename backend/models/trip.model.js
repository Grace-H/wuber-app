const mongoose = require('mongoose');

const Schema = mongoose.Schema;

/*
const passengerSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    approved: {
        type: Boolean,
        required: true,
    }
}, {
    timestamps: true,
});
*/

const tripSchema = new Schema({
    driver: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    seats: {
        type: Number,
        required: true,
    },
    passengers: [{
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        approved: {
            type: Boolean,
            required: true,
        }
    }],
    origin: {
        type: String,
        required: true,
        trim: true,
    },
    destination: {
        type: String,
        required: true,
        trim: true,
    },
    time: {
        type: Date,
        required: true,
    },
    isRoundTrip: {
        type: Boolean,
        required: true,
    },
    returnTime: {
        type: Date,
    }
}, {
    timestamps: true,
});

const Trip = mongoose.model('Trip', tripSchema);

module.exports = Trip;