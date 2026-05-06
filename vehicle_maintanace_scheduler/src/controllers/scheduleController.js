const {
  fetchDepartments,
  fetchVehicles,
} = require("../services/apiService");

const solveKnapsack =
  require("../services/knapsackService");

async function getOptimalSchedule(
  req,
  res
) {
  try {

    const departments =
      await fetchDepartments();

    const vehicles =
      await fetchVehicles();

    let result = [];

    for (const dept of departments) {

      const optimized =
        solveKnapsack(
          vehicles,
          dept.MechanicHours
        );

      result.push({
        departmentId: dept.ID,

        mechanicHours:
          dept.MechanicHours,

        totalImpact:
          optimized.maxImpact,

        tasks:
          optimized.selectedTasks,
      });
    }

    res.json({
      success: true,
      data: result,
    });

  } catch (error) {

    res.status(500).json({
      error: error.message,
    });
  }
}

module.exports = {
  getOptimalSchedule,
};