const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Server API is running ");
});

app.listen(port, () => {
  console.log("Course server is running", port);
});
