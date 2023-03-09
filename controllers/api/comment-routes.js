const express = require("express");
const router = express.Router();
const { User, Post, Comment } = require("../../models");
const withAuth = require("../../utils/auth");

// Get all comments
router.get("/", async (req, res) => {
  try {
    const dbCommentData = await Comment.findAll();
    res.json(dbCommentData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Create a comment
router.post("/", withAuth, async (req, res) => {
  try {
    const commentData = {
      comment_text: req.body.comment_text,
      post_id: req.body.post_id,
      user_id: req.session.user_id,
    };
    const dbCommentData = await Comment.create(commentData);
    res.json(dbCommentData);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

module.exports = router;
