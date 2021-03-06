/*
 * Mongoose Schema for trip
 * Author: Grace Hunter and Gordon Olson
 * Last Modified: 29 April 2021
 *
 */

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tripSchema = new Schema(
  {
    driver: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    seats: {
      type: Number,
      required: true,
    },
    passengers: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
          required: true,
        },
        approved: {
          type: Boolean,
          required: true,
        },
        name: {
          type: String,
          required: true,
        },
      },
    ],
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
    },
    payment: {
      type: String,
      required: false,
      trim: true,
    },
    dollars: {
      type: String,
      required: false,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Trip = mongoose.model("Trip", tripSchema);

module.exports = Trip;
