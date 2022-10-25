const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());

const courses = require("./data/courses.json");
const course_details = require("./data/course_details.json");

app.get("/", (req, res) => {
  res.send("Server API is running ");
});

app.get("/courses", (req, res) => {
  res.send(courses);
});

app.listen(port, () => {
  console.log("Course server is running", port);
});
