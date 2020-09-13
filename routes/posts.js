const express = require("express")
const Post = require("../models/Post")
const BodyParser = require("body-parser")

const router = express.Router()

router.use(BodyParser.json())

// Get all posts
router.get("/", async (req, res) => {
	try {
		const posts = await Post.find()
		res.json(posts)
	} catch {
		res.json({message: err})
	}
})

// Get post
router.get("/:id", async (req, res) => {
	try {
		const post = await Post.findById(req.params.id)
		res.json(post)
	} catch {
		res.json({message: err})
	}
})

// Remove post
router.delete("/:id", async (req, res) => {
	try {
		const removed_post = await Post.remove({_id:req.params.id})
		res.json(removed_post)
	} catch {
		res.json({message: err})
	}
})

// Update post
router.patch("/:id", async (req, res) => {
	try {
		const updated_post = await Post.updateOne(
			{ _id: req.params.id },
			{ $set: { 
				title: req.body.title,
				description: req.body.description
			} }
		)
		res.json(updated_post)
	} catch {
		res.json({message: err})
	}
})

// Submit post
router.post("/", async (req, res) => {
	const post = new Post({
		title: req.body.title,
		description: req.body.description,
	})

	try {
		const saved_post = await post.save()
		res.json(saved_post)
	} catch(err) {
		res.json({message: err})
	}
})

module.exports = router
