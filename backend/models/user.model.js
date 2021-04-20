/*
 * User mongoose Schema
 *
 * Author: Grace Hunter
 * Date: 3 April 2021
 * last modified: 4 3 21 GH
 */

//Importing the mongoose module
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minLength: 3,
        trim: true,
    },
    password: {
        type: String, 
        required: true, 
        unique: true, 
        minLength: 8, 
        trim: true, 
    },
    year: {
        type: String, 
        required: false, 
        unique: false, 
        trim: true, 
    }, 
    gender: {
        type: String, 
        required: false, 
        unique: false, 
        trim: true, 
    }, 
    phone: {
        type: String, 
        required: false, 
        unique: true, 
        trim: true, 
    }
}, {
    timestamps: true,
});

//Made a change here so that the model is directly exported. 
module.exports = mongoose.model('User', userSchema);