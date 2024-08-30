import express from "express";
import bodyParser from "body-parser";
import connection from "./connectionDB.js";
import mongoose from "mongoose";
import router from "./routes/Post.js";
import Post from "./models/Post.js";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.set("strictQuery", false);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const post = new Post({
  title: "Test post",
  description: "This is a test post",
});

app.use("/servicios", router);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
  connection().catch(console.error);
});
