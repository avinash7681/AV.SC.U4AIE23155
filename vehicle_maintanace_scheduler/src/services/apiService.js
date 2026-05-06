async function fetchDepartments() {

  return [
    {
      ID: 1,
      MechanicHours: 10,
    },

    {
      ID: 2,
      MechanicHours: 15,
    },
  ];
}

async function fetchVehicles() {

  return [

    {
      TaskID: "A1",
      Duration: 3,
      Impact: 10,
    },

    {
      TaskID: "B1",
      Duration: 4,
      Impact: 15,
    },

    {
      TaskID: "C1",
      Duration: 5,
      Impact: 20,
    },

    {
      TaskID: "D1",
      Duration: 2,
      Impact: 7,
    },
  ];
}

module.exports = {
  fetchDepartments,
  fetchVehicles,
};