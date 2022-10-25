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

app.get("/course/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  const perCourse = course_details.filter((c) => c.course_id === id);
  res.send(perCourse);
});

app.get("/course_detail/:id", (req, res) => {
  const id = req.params.id;
  const selectedCourse_detail = course_details.find((c) => c.id === id);
  res.send(selectedCourse_detail);
});

app.listen(port, () => {
  console.log("Course server is running", port);
});
