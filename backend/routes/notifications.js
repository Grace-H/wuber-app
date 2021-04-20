/*
 * Express routes for Notification
 * Author: Grace Hunter
 * Date: 19 April 2021
 */

const router = require("express").Router();
let Notification = require("../models/notification.model");

router.route("/").get((req, res) => {
  Notification.find(req.query)
    .sort({ time: 1 })
    .then((notifications) => res.json(notifications))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/findByUser").get((req, res) => {
  Notification.find()
    .where("userid")
    .equals(req.query.userid)
    .sort({ time: 1 })
    .then((notifications) => res.json(notifications))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const userid = req.body.userid;
  const text = req.body.text;
  const time = Date.parse(req.body.time);

  const newNotification = new Notification({
    userid,
    text,
    time,
  });

  newNotification
    .save()
    .then(() => res.json("Notification added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

//when calling from axios, put the object's id in for ":id" in the route
router.route("/findbyid/:id").get((req, res) => {
  Notification.findById(req.params.id)
    .then((notification) => res.json(notification))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/deletebyid/:id").delete((req, res) => {
  Notification.findByIdAndDelete(req.params.id)
    .then(() => res.json("Notification deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
