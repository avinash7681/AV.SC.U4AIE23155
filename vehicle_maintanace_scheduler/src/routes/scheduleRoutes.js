const express = require("express");

const router = express.Router();

const {
  getOptimalSchedule,
} = require("../controllers/scheduleController");

router.get(
  "/optimal-vehicle-scheduling",
  getOptimalSchedule
);

module.exports = router;