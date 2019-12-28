require("dotenv").config();
const compression = require("compression");
const express = require("express");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const cors = require("./middlewares/cors");
const morgan = require("morgan");

const app = express();

app
  .use(helmet())
  .use(compression())
  .use(morgan("dev"))
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .use(cookieParser())
  .use(cors);

app.use((req, res, next) => {
  return res.status(404).json({ err: "Route Not Found", msg: "" });
});

if (app.get("env") === "development") {
  app.use((err, req, res, next) => {
    return res.status(err.status || 500).json({ err: err, msg: err.msg });
  });
}

if (app.get("env") === "production") {
  app.use((err, req, res, next) => {
    return res.status(err.status || 500).json({ err: "Something Went Wrong", msg: "" });
  });
}

module.exports = app;
