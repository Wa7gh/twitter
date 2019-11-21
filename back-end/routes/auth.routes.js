const express = require("express");
const router = express.Router();
const User = require('../model/User')
const bcrypt = require('bcrypt');
const saltRounds = 10;
const cors = require('cors');
// app.use(cors());
// app.use(bodyParser.json());



router.post("/", (req, res) => {

 

let user = new User({
firstname: req.body.firstname,
lastname: req.body.lastname,
password: req.body.password,
username: req.body.username,
email: req.body.email
})
user.save().then(()=>{
  res.json({msg: "success post" , "body": req.body })
  console.log(req.body)
}).catch((err)=>{
console.log(err)
})
});


router.get("/", (req, res) => {

  User.find()
  .then(data =>{
    res.json({msg: "success get", "body": data})
  })
});



router.get('/', function(req, res) {
  Todo.find(function(err, todos) {
      if (err) {
          console.log(err);
      } else {
          res.json(todos);
      }
  });
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
