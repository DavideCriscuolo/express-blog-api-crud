const express = require("express");
const app = express();
const port = 3030;
const PostsRouter = require("./routes/posts");

app.use(express.json());
app.use("/posts", PostsRouter);

app.listen(port, () => {
  console.log(`Il server è in ascolto`);
});
