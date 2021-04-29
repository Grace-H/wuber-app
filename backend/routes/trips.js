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
  const payment = req.body.payment;
  const dollars = req.body.dollars;

  const newTrip = new Trip({
    driver,
    seats,
    passengers,
    origin,
    destination,
    time,
    isRoundTrip,
    returnTime,
    payment,
    dollars,
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
  console.log("Trip's id: ");
  console.log(req.params.id);
  Trip.findById(req.params.id)
    .then((trip) => {
      console.log(trip);
      trip.seats = Number(req.body.seats);
      trip.passengers = req.body.passengers;
      trip.origin = req.body.origin;
      trip.destination = req.body.destination;
      trip.time = Date.parse(req.body.time);
      trip.isRoundTrip = req.body.isRoundTrip;
      trip.returnTime = Date.parse(req.body.returnTime);
      trip.payment = req.body.payment;
      trip.dollars = Number(req.body.dollars);
      trip
        .save()
        .then(() => res.json("Trip updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

//add a passenger to a trip
router.route("/addPassenger").post((req, res) => {
  console.log("request is running!");
  Trip.updateOne({ _id: req.body.tripid }, req.body.trip)
    /*
    .then((trip) => {
      trip.passengers = trip.passengers.push(req.body.passid);
      //<--got through here
      trip
        .save()
        .then(() => {
          res.json("Trip updated!");
          console.log("Hello");
        })
        .catch((err) => res.status(400).json("Error1: " + err));
    })
    */
    .then(() => res.json("Trip updated!"))
    .catch((err) => res.status(400).json("Error2: " + err));

  /*
  console.log(req.params.tripid);
  console.log(req.params.passid);
  Trip.updateOne({ _id: tripid }, { $addToSet: { passengers: [passid] } })
    .then(() => res.json("Passenger added."))
    .catch((err) => res.status(400).json("Error: " + err));
    */
});

module.exports = router;
