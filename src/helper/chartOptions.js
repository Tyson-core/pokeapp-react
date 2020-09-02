export const chartOptions = {
  maintainAspectRatio: false,
  scales: {
    yAxes: [
      {
        stacked: true,
        gridLines: {
          display: true,
          color: "rgba(0,0,0,0.2)",
        },
      },
    ],
    xAxes: [
      {
        stacked: true,
        gridLines: {
          display: false,
        },
      },
    ],
  },
  title: {
    display: true,
    text: "Pokemon Basic Stats",
  },
};
