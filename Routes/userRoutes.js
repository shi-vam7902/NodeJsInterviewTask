const express = require('express')
const app = express()
const router = express.Router
const userController = require('../Controller/uController')
app.post("/users",userController.addUser)
app.get("/users",userController.getAllUsers)
app.get("/user:/id",userController.getUserById)

module.exports = router