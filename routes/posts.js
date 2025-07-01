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

//Create
router.post("/", (req, res) => {
  const id = Number(req.params.id);
  res.send("Post salvato con successo");
});

//Update
router.put("/:id", (req, res) => {
  const id = Number(req.params.id);
  res.send(`Hai modificato parzialmente il post con id ${id}`);
});

router.patch("/:id", (req, res) => {
  const id = Number(req.params.id);
  res.send(`Hai modificato Interamente il post con id ${id}`);
});
//Deleate

router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = posts.findIndex((post) => {
    if (post.id === id) {
      return true;
    }
  });

  if (index !== -1) {
    posts.splice(index, 1);
    res.sendStatus(204);
  } else {
    res.status(404).json({ error: "Post non trovato" });
  }
  console.log(posts);
});

module.exports = router;
