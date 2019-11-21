const express = require("express");
const router = express.Router();
const User = require('../model/User')
// const bcrypt = require('bcrypt');
// const saltRounds = 10;

router.get("/", (req, res) => {
  
  res.json({msg: "success get", "body": req.body})
  
 
});

router.post("/", (req, res) => {

let user = new User({
firstname: req.body.first_name,
lastname: req.body.last_name,
password: req.body.password,
username: req.body.display_name,
email: req.body.email
})
user.save().then(()=>{
  res.json({msg: "success post"})
  console.log(req.body)
}).catch(()=>{
console.log("i'm not fine fix me ")
})
});

// router.get("/login", (req, res) => {
//   res.render("auth/login");
// });


// router.post("/login", (req, res) => {
//   passport.authenticate('local',{
//     successRedirect: '/profile',
//     failureRedirect: '/auth/login'
//   })
// });


// router.get("/user", (req, res) => {
//   res.render("auth/login");
// });

module.exports = router;
