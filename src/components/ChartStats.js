// import React from 'react'
/** @jsx jsx */
import { jsx, css } from "@emotion/core";

import { Bar } from "react-chartjs-2";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export const ChartStats = ({ color,baseStats }) => {
  const [chartData, setChartData] = useState({});

  const { result } = useSelector((state) => state.cardReducer);

  const chartSection = css({
    display: "flex",
    justifyContent: "center",
    marginTop: "40px",
    flexDirection: "column",
  });

  const chartStyle = css({
    backgroundColor: color,
    border: "3px solid black",
    color: "red",
    position: "relative",
    margin: "auto",
    height: "50vh",
    width: "80vw"
  });

  const nameStats = result.stats.map((res) => res.stat.name.toUpperCase());

  const chart = () => {
    setChartData({
      labels: nameStats,
      datasets: [
        {
          label: result.name.toUpperCase(),
          data: baseStats,
          backgroundColor: "rgba(0, 128, 255,0.336)",
          borderWidth: 2,
          borderColor: "rgba(0, 0, 0)",
          hoverBackgroundColor:"rgba(0, 128, 255,0.736)",
        },
      ],
    });
  };

  useEffect(() => {
    chart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [baseStats]);

  const chartOptions = {
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
  return (
    <div css={chartSection}>
      <div css={chartStyle}>
        <Bar data={chartData} options={chartOptions}/>
      </div>
    </div>
  );
};
