const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv/config")

const app = express()

// Middlewares
app.use(cors())

// Imported routes
const posts_router = require("./routes/posts")
app.use("/posts", posts_router)

// Routes
app.get("/", (req, res) => {
	res.send("HOME HOME")
})


// Connect to DB
const username = process.env.DB_USERNAME
const password = process.env.DB_PASSWORD
mongoose.connect(`mongodb+srv://${username}:${password}@testingcluster.l8qny.mongodb.net/rest`, 
	{ useUnifiedTopology: true, useNewUrlParser: true }, 
	() => {
	console.log("Connected to DB")
})

// Start listening
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
	console.log(`Listening on ${PORT}...`)
})