const { posts } = require("./../data/posts");
const express = require("express");
const router = express.Router();
const postsController = require("./../controllers/posts");

//index

router.get("/", (req, res) => {
  res.json(posts);
});

//show

router.get("/:id", postsController.show);

//Create
router.post("/", postsController.store);

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

router.delete("/:id", postsController.destroy);

module.exports = router;
