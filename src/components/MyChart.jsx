"use client";
import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const MyChart = ({ data, typeofchart }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    const myChart = new Chart(ctx, {
      type: typeofchart,
      data: {
        labels: data.labels,
        datasets: data.datasets // Utilisation directe de plusieurs datasets
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            grid: {
              display: false
            }
          },
          y: {
            grid: {
              color: "rgba(0, 0, 0, 0.1)"
            },
            ticks: {
              color: "blue"
            }
          }
        },
        plugins: {
          legend: {
            labels: {
              color: "blue"
            }
          }
        }
      }
    });

    return () => myChart.destroy();
  }, [data, typeofchart]);

  return <canvas ref={chartRef} className="w-full" />;
};

export default MyChart;
