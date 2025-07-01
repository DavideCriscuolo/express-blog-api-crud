const { posts } = require("./../data/posts");

const express = require("express");
const router = express.Router();

//index

router.get("/", (req, res) => {
  res.json(posts);
});

//show

router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const post = posts.filter((post) => {
    if (post.id === id) {
      return res.json(post);
    } else {
      res.status(404).json({ error: "Post non trovato" });
    }
  });
});

router.post("/", (req, res) => {
  const id = Number(req.params.id);
  res.send("Post salvato con successo");
});

module.exports = router;
