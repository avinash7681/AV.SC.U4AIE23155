function solveKnapsack(tasks, capacity) {

  const n = tasks.length;

  const dp = Array(n + 1)
    .fill()
    .map(() =>
      Array(capacity + 1).fill(0)
    );

  for (let i = 1; i <= n; i++) {

    const {
      Duration,
      Impact,
    } = tasks[i - 1];

    for (let w = 0; w <= capacity; w++) {

      if (Duration <= w) {

        dp[i][w] = Math.max(
          Impact +
          dp[i - 1][w - Duration],

          dp[i - 1][w]
        );

      } else {

        dp[i][w] =
          dp[i - 1][w];
      }
    }
  }

  let w = capacity;

  let selectedTasks = [];

  for (let i = n; i > 0; i--) {

    if (dp[i][w] !== dp[i - 1][w]) {

      selectedTasks.push(tasks[i - 1]);

      w -= tasks[i - 1].Duration;
    }
  }

  return {
    maxImpact: dp[n][capacity],
    selectedTasks,
  };
}

module.exports = solveKnapsack;