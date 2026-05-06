const express = require("express");

const logger = require("./middleware/logger");

const app = express();

app.use((req, res, next) => {

  logger.info({
    method: req.method,
    url: req.url,
    time: new Date(),
  });

  next();
});

app.get("/", (req, res) => {

  res.send("Logging Middleware Working");
});

app.listen(4000, () => {

  console.log("Server running on port 4000");
});