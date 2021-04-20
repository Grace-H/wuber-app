const router = require("express").Router();
let User = require("../models/user.model");

//get all users
router.route("/").get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

//find one user's profile using their username and password
router.route("/searchUser").get((req, res) => {
  User.findOne()
    .where("username")
    .equals(req.query.username)
    .where("password")
    .equals(req.query.password)
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json("Error: " + err));
});

//add a user
router.route("/add").post((req, res) => {
  const name = req.body.name;
  const email = req.body.email;

  const newUser = new User({ name, email });

  newUser
    .save()
    .then(() => res.json("User added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
