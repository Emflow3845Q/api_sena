import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import router from "./routes/Post.js";
import connection from "./connectionDB.js"; 

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.set("strictQuery", false);

async function startServer() {
  try {
    await connection();

    app.get("/", (req, res) => {
      res.send("Hello World!");
    });

    app.use("/servicios", router);

    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  } catch (error) {
    console.error("Error al conectar a la base de datos:", error);
    process.exit(1); 
  }
}

startServer();
