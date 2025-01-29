import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import apiData from "./data.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// / get endpoint for returning interns email, current datetime and github repo for the project
app.get("/", (req, res) => {
  res.json(apiData);
});

// connecting server to port 3000
app.listen(PORT, () => {
  console.log(`Server currently running on port ${PORT}`);
});
