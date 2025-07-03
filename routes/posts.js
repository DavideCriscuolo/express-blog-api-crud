const posts = require("./../data/posts");
const express = require("express");
const router = express.Router();
const pageNotFound = require("./../middleware/notFound");
const postsController = require("./../controllers/posts");

//index

router.get("/", pageNotFound, postsController.indexFilter);

//show

router.get("/:id", postsController.show);

//Create
router.post("/", postsController.store);

//Update
router.put("/:id", postsController.update);

// router.patch("/:id", postsController.upadteFull);
//Deleate

router.delete("/:id", postsController.destroy);

module.exports = router;
