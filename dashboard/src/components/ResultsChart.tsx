// src/components/ResultsChart.tsx
import React from "react";
import { Typography, Box } from "@mui/material";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import type { InferenceResult } from "../types";

// Register chart components once
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

interface Props {
  results: InferenceResult[];
}

const ResultsChart = ({ results }: Props) => {
  const chartData = {
    labels: results.map((r) => r.label),
    datasets: [
      {
        label: "Scores",
        data: results.map((r) => r.score),
        backgroundColor: "rgba(75,192,192,0.6)",
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
    },
  };

  return (
    <Box sx={{ height: { xs: 300, sm: 400 } }}>
      <Bar
        data={chartData}
        options={{ ...chartOptions, maintainAspectRatio: false }}
      />
    </Box>
  );
};

export default ResultsChart;
