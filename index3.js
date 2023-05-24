const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }));
const mongoose = require("mongoose");
app.use(express.json());
const userRoutes = require('./Routes/userRoutes')
//db
mongoose
  .connect("mongodb://127.0.0.1:27017/nodejstask")
  .then((data) => {
    console.log("DATABASE CONNECTED SUCCESSFULLY");
  })
  .catch((err) => {
    console.log("error connecting");
  });
//routes
console.log('routes called');

app.use("/user",userRoutes)
console.log('routes called');
console.log('routes called');

//url
app.listen(3000, (err) => {
  if (err) {
    console.log("Error=>", err);
  } else {
    console.log("Server Started on PORT 9999");
  }
});
