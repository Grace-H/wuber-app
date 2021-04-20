/*
 * Express router for Notification
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

/*
    .where("time")
    .gt(req.body.startDate)
    .lt(req.body.endDate)
    .where("destination")
    .equals(req.body.startDate)
    .where("origin")
    .equals(req.body.endDate)
    .sort({ date: -1 })
    */
/*
router.route("/search").get((req, res) => {
  Notification.find()
    /*
    .where("time")
    .gt(new Date(req.body.startDate))
    .lt(new Date(req.body.endDate))
    */
/*
    .where("destination")
    .equals(req.query.destination)
    .where("origin")
    .equals(req.query.origin)
    .sort({ time: 1 })
    .then((notifications) => res.json(notifications))
    .catch((err) => res.status(400).json("Error: " + err));
});
*/

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
