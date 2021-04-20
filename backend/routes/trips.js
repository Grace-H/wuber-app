/*
 * Routes for trips collection
 * Author: Grace-H
 */
const router = require("express").Router();
let Trip = require("../models/trip.model");

router.route("/").get((req, res) => {
  Trip.find(req.query)
    .sort({ time: 1 })
    .then((trips) => res.json(trips))
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
router.route("/search").get((req, res) => {
  Trip.find()
    /*
    .where("time")
    .gt(new Date(req.body.startDate))
    .lt(new Date(req.body.endDate))
    */
    .where("destination")
    .equals(req.query.destination)
    .where("origin")
    .equals(req.query.origin)
    .sort({ time: 1 })
    .then((trips) => res.json(trips))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const driver = req.body.driver;
  const seats = Number(req.body.seats);
  const passengers = req.body.passengers;
  const origin = req.body.origin;
  const destination = req.body.destination;
  const time = Date.parse(req.body.time);
  const isRoundTrip = req.body.isRoundTrip;
  const returnTime = Date.parse(req.body.returnTime);

  const newTrip = new Trip({
    driver,
    seats,
    passengers,
    origin,
    destination,
    time,
    isRoundTrip,
    returnTime,
  });

  newTrip
    .save()
    .then(() => res.json("Trip added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/findbyid/:id").get((req, res) => {
  Trip.findById(req.params.id)
    .then((trip) => res.json(trip))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/deletebyid/:id").delete((req, res) => {
  Trip.findByIdAndDelete(req.params.id)
    .then(() => res.json("Trip deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  Trip.findById(req.params.id)
    .then((trip) => {
      trip.seats = Number(req.body.seats);
      trip.passengers = req.body.passengers;
      trip.origin = req.body.origin;
      trip.destination = req.body.destination;
      trip.time = Date.parse(req.body.time);
      trip.isRoundTrip = req.body.isRoundTrip;
      trip.returnTime = Date.parse(req.body.returnTime);

      trip
        .save()
        .then(() => res.json("Trip updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
