const express = require("express");
const createError = require("http-errors");
const cors = require("cors");
require("dotenv").config();
const { connection } = require("./config/db.config");
const app = express();

// databsase connection
connection();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// testing router
app.get("/", async (req, res, next) => {
  res.send({ message: "Server working properly" });
});

// user api router
app.use("/api", require("./routes"));

app.use((req, res, next) => {
  next(createError.NotFound());
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    status: false || 500,
    message: err.message,
  });
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`🚀 @ http://localhost:${PORT}`));
