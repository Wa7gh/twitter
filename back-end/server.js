const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv/config");
const authRoutes = require("./routes/auth.routes");
const tweetRouts = require('./routes/tweet.routes');
const session = require ('express-session')
const passport = require('passport')
const cors = require('cors')
app.use(cors())

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: process.env.Session_secret,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))

app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", authRoutes);

// app.get("*", (req, res) => {
//   res.render("404");
// });

mongoose.connect(
  process.env.DEV_DB,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connected to mongoDB");
  }
);
app.listen(5200, () => console.log("express running"));
