const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");

const User = require('../models/user')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/',(req, res, next) => {
  const user = new User({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    age: req.body.age
  });
  user.save().then(result => {
    console.log(result);
  })
  .catch(err => console.log(err));
  res.status(201).json({
    message: "Handling POST requests to /users",
    createdUser: user
  })
});

module.exports = router;
