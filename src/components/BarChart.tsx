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

const percentage1 = [20, 40, 60, 80, 100];
const percentage2 = [40, 80, 100, 20, 60];

const BarChart3 = () => {
  const options3 = {
    indexAxis: "y" as const,
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: "right" as const,
      },
      title: {
        display: true,
        text: "Campaign success rate",
      },
    },
  };

  const labels = ["campaign1", "campaign2"];

  const data3 = {
    labels,
    datasets: [
      {
        label: "Success Rate",
        data: [80, 70],
        backgroundColor: ["red", "blue"],
      },
    ],
  };
  return (
    <div>
      <Bar options={options3} data={data3} />
    </div>
  );
}

const regions = ["Gujarat", "Maharastra", "Rajasthan", "UP", "Bihar", "Tamil Nadu", "Delhi", "Kerela", "West Bengal"];

const BarChart4 = () => {
  const options4 = {
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

  const data4 = {
    labels,
    datasets: [
      {
        label: "Views",
        data: [30, 40, 20, 50, 70, 10, 80, 60, 10],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  return (
    <div>
      <Bar options={options4} data={data4} />
    </div>
  );
};

const BarChart5 = () => {
  const options5 = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "historical analysis across Campaigns > Views vs Time",
      },
    },
  };

  const labels = weeks;

  const data5 = {
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
      <Bar options={options5} data={data5} />
    </div>
  );
};

const reasons = ["failed verification","missed deadline","insufficient documents"]
const BarChart6 = () => {
  const options6 = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "reasons for drop off >views",
      },
    },
  };

  const labels = weeks;

  const data6 = {
    labels,
    datasets: [
      {
        label: "Failed verification",
        data: [1, 2, 3, 4, 5],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "missed deadline",
        data: [6, 7, 8, 9, 10],
        backgroundColor: "rgba(106, 0, 180, 1)",
      },
      {
        label: "insufficient details",
        data: [11,12,13,14,15],
        backgroundColor: "rgb(0, 179, 60)",
      },
    ],
  };
  return (
    <div>
      <Bar options={options6} data={data6} />
    </div>
  );
};





export { BarChart1, BarChart2, BarChart3, BarChart4, BarChart5, BarChart6 };
