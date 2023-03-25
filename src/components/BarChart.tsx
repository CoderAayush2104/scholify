import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const weeks = ["week1", "week2", "week3", "week4", "week5"];

const BarChart1 = () => {
  const options1 = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Campaign > Views vs Time",
      },
    },
  };

  const labels = weeks;

  const data1 = {
    labels,
    datasets: [
      {
        label: "Views",
        data: [1, 2, 3, 4, 5],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  return (
    <div>
      <Bar options={options1} data={data1} />
    </div>
  );
};

const BarChart2 = () => {
  const options2 = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Across Campaigns > Views vs Time",
      },
    },
  };

  const labels = weeks;

  const data2 = {
    labels,
    datasets: [
      {
        label: "Campaign1",
        data: [1, 2, 3, 4, 5],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Campaign2",
        data: [6, 7, 8, 9, 10],
        backgroundColor: "rgba(106, 0, 180, 1)",
      },
    ],
  };
  return (
    <div>
      <Bar options={options2} data={data2} />
    </div>
  );
};

export { BarChart1, BarChart2 };
