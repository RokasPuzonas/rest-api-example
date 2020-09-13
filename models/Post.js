const mongoose = require("mongoose")

const post_scheme = mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	date: {
		type: Date,  
		default: Date.now
	}
})

module.exports = mongoose.model("Posts", post_scheme)