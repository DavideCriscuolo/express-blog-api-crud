const express = require("express");
const app = express();
const port = 3030;
const PostsRouter = require("./routes/posts");
const notFound = require("./middleware/notFound");

app.use(express.json());
app.use("/posts", PostsRouter);

app.listen(port, () => {
  console.log(`Il server è in ascolto`);
});
app.use(notFound);
