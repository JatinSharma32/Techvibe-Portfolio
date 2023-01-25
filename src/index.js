const exp = require("constants");
const express = require("express");
const path = require("path");

const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.use(express.static(path.join(__dirname, "..", "public")));

// Home page API
app.get("/", (req, res) => {
  console.log("Request recived \n");
  res.sendFile(path.join(__dirname, "..", "public", "views", "index.html"));
});

app.listen(process.env.PORT, () => {
  console.log("Your server started at: ", process.env.PORT);
});
