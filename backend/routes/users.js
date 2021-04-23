/*
 * Routes for users collection
 * Author: Grace-H & Brendan-K
 */

const router = require("express").Router();
let User = require("../models/user.model");

//get all users
router.route("/").get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

//find user profile by object id
router.route("/findbyid/:id").get((req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      res.json(user);
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

//find one user's profile using their email and password
router.route("/searchUser").get((req, res) => {
  User.findOne()
    .where("email")
    .equals(req.query.userEmail)
    .where("password")
    .equals(req.query.password)
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json("Error: " + err));
});

//add a user
router.route("/add").post((req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const year = req.body.year;

 
  const newUser = new User({ 
    name, 
    email, 
    password, 
    year,  
  });

  newUser
    .save()
    .then(() => res.json("User added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

//update user
//put id in place of :id in route (e.g. "users/update/3298hf98fdifbvsdijfbvsdf9")
//pass user object as second param as would for add
router.route("/update/:id").post((req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      //update all fields
      user.name = req.body.name;
      user.email = req.body.email;
      user.password = req.body.password;
      user.year = req.body.year;
      user.phone = req.body.phone;
      user.gender = req.body.gender;

      user
        .save()
        .then(() => res.json("User updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
