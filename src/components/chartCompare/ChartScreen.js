/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { chartSection, chartStyleStatic } from "../ui/ComponentsStyled";
import { chartOptions } from "../../helper/chartOptions";

export const ChartScreen = () => {
  const { result:resultCompare } = useSelector((state) => state.compareResult);
  const { result:resultCard } = useSelector((state) => state.cardReducer);
  const nameStatsGlobal = resultCard.stats.map((res) => res.stat.name.toUpperCase());
  const baseStatsP1 = resultCard.stats.map((res) => res.base_stat);

  const baseStatsP2 = resultCompare.stats.map((res) => res.base_stat);

  const [chartData, setChartData] = useState({});

  const chart = () => {
    setChartData({
      labels: nameStatsGlobal,
      datasets: [
        {
          label: resultCard.name.toUpperCase(),
          data: baseStatsP1,
          backgroundColor: "rgba(0, 128, 255,0.336)",
          borderWidth: 2,
          borderColor: "rgba(0, 0, 0)",
          hoverBackgroundColor: "rgba(0, 128, 255,0.736)",
        },
        {
            label: resultCompare.name.toUpperCase(),
            data: baseStatsP2,
            backgroundColor: "rgba(0, 255, 68,0.336)",
            borderWidth: 2,
            borderColor: "rgba(0, 0, 0)",
            hoverBackgroundColor: "rgba(0, 255, 68,0.736)",
          },
      ],
    });
  };
  useEffect(() => {
    chart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div css={chartSection}>
      <div css={chartStyleStatic}>
        <Bar data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};
