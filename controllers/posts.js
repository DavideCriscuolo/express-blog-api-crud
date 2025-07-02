const posts = require("./../data/posts");

const show = (req, res) => {
  const id = Number(req.params.id);
  const post = posts.find((post) => post.id === id);
  if (post) {
    res.json(post);
  } else {
    res.status(404).json({ error: "Post non trovato" });
  }
};

const destroy = (req, res) => {
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
};

module.exports = {
  show,
  destroy,
};
