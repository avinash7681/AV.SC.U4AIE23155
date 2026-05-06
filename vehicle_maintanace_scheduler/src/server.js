require("dotenv").config();

const express = require("express");

const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const scheduleRoutes =
  require("./routes/scheduleRoutes");

app.use("/api", scheduleRoutes);

app.get("/", (req, res) => {

  res.send("Vehicle Scheduler Running");
});

const PORT = 3000;

app.listen(PORT, () => {

  console.log(`Server running on ${PORT}`);
});