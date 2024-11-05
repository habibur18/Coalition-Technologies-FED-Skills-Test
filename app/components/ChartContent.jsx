import { Line } from "react-chartjs-2";

const ChartContent = ({ labels, systolicData, diastolicData }) => {
  const chartData = {
    labels,
    datasets: [
      {
        label: "Systolic",
        data: systolicData,
        borderColor: "#E66FD2",
        backgroundColor: "#DDA0DD",
        pointBorderColor: "#E66FD2",
        pointBackgroundColor: "#E66FD2",
        pointBorderWidth: 4,
        tension: 0.4,
        pointRadius: 5,
      },
      {
        label: "Diastolic",
        data: diastolicData,
        borderColor: "#8C6FE6",
        backgroundColor: "#8C6FE6",
        pointBorderColor: "#8C6FE6",
        pointBackgroundColor: "#8C6FE6",
        pointBorderWidth: 4,
        tension: 0.4,
        pointRadius: 5,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.dataset.label}: ${context.raw}`,
        },
      },
    },
    scales: {
      y: {
        min: 60,
        max: 180,
        ticks: {
          stepSize: 20,
          color: "#4A4A4A",
        },
        grid: {
          color: "#E0E0E0",
          drawBorder: false,
        },
      },
      x: {
        ticks: {
          color: "#4A4A4A",
          padding: 10,
        },
        grid: {
          // IT's gonna remove the vertical line x cross the x-axis issue
          lineWidth: (context) => {
            return context.index === 0 && context.label === "Oct, 2023" ? 0 : 0;
          },
          z: 1,
          // removes the border of the x-axis
          drawBorder: false,
          // prevents the vertical line from being crossed the x-axis
          clip: false,
        },
      },
    },
  };
  return <Line data={chartData} options={options} />;
};

export default ChartContent;
