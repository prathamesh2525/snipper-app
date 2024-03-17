const express = require("express")
const router = express.Router()
const Submission = require("../models/submissions")

router.post("/", async (req, res) => {
  try {
    const { username, codeLanguage, codeSnippet, stdin } = req.body
    const submission = await Submission.create({
      username,
      codeLanguage,
      codeSnippet,
      stdin,
    })
    res
      .status(201)
      .json({ message: "Submission created successfully", submission })
  } catch (error) {
    console.error("Error creating submission:", error)
    res.status(500).json({ error: "Error creating submission" })
  }
})

router.get("/", async (req, res) => {
  try {
    const submissions = await Submission.findAll()
    res.json(submissions)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Internal server error" })
  }
})

module.exports = router
