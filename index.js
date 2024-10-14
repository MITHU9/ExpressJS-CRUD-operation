require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const server = express();
const productRouter = require("./routes/product");
const userRouter = require("./routes/user");

//Database Connection
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(
    "mongodb+srv://mithu10:7L0HUCLtOwmfO7nO@cluster0.vl3dn.mongodb.net/"
  );
  console.log("Database connected");
}

//bodyParser//Middleware
server.use(express.json());
server.use(morgan("default"));
server.use(express.static(process.env.PUBLIC_DIR));
server.use("/products", productRouter.router);
server.use("/users", userRouter.router);

server.listen(process.env.PORT, () => {
  console.log("server started");
});
