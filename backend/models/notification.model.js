/*
 * Notification mongoose Schema
 *
 * Author: Grace Hunter
 * Date: 19 April 2021
 */

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const notificationSchema = new Schema(
  {
    userid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    text: {
      type: String,
      required: true,
      trim: true,
    },
    time: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

//Made a change here so that the model is directly exported.
module.exports = mongoose.model("Notification", notificationSchema);
