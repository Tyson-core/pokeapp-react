// import React from 'react'
/** @jsx jsx */
import { jsx, css } from "@emotion/core";

import { Bar } from "react-chartjs-2";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { chartSection } from "./ui/ComponentsStyled";
import { chartOptions } from "../helper/chartOptions";

export const ChartStats = ({ color, baseStats }) => {
  const [chartData, setChartData] = useState({});

  const { result } = useSelector((state) => state.cardReducer);

  const chartStyle = css({
    backgroundColor: color,
    border: "3px solid black",
    color: "red",
    position: "relative",
    margin: "auto",
    height: "50vh",
    width: "80vw",
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
          hoverBackgroundColor: "rgba(0, 128, 255,0.736)",
        },
      ],
    });
  };

  useEffect(() => {
    chart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [baseStats]);

  return (
    <div css={chartSection}>
      <div css={chartStyle}>
        <Bar data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};
