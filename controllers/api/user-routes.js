const router = require("express").Router();
const { User, Post, Comment } = require("../../models");

const excludePassword = { attributes: { exclude: ["password"] } };

// Get all users
router.get("/", async (req, res) => {
  try {
    const dbUserData = await User.findAll(excludePassword);
    res.json(dbUserData);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// Get specific user
router.get("/:id", async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      ...excludePassword,
      where: { id: req.params.id },
      include: [
        { model: Post, attributes: ["id", "title", "content", "created_at"] },
        {
          model: Comment,
          attributes: ["id", "comment_text", "created_at"],
          include: { model: Post, attributes: ["title"] },
        },
      ],
    });
    if (!dbUserData) {
      res.status(404).json({ message: "No user found with this id" });
      return;
    }
    res.json(dbUserData);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// Create a user
router.post("/", async (req, res) => {
  try {
    const dbUserData = await User.create({
      username: req.body.username,
      password: req.body.password,
    });
    req.session.save(() => {
      req.session.user_id = dbUserData.id;
      req.session.username = dbUserData.username;
      req.session.loggedIn = true;
      res.json(dbUserData);
    });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      where: { username: req.body.username },
    });
    if (!dbUserData) {
      res.status(400).json({ message: "No user with that username!" });
      return;
    }
    const validPassword = await dbUserData.checkPassword(req.body.password);
    if (!validPassword) {
      res.status(400).json({ message: "Incorrect password!" });
      return;
    }
    req.session.save(() => {
      req.session.user_id = dbUserData.id;
      req.session.username = dbUserData.username;
      req.session.loggedIn = true;
      res.json({
        user: dbUserData,
        message: "You are now logged in!",
      });
    });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// Logout
router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
