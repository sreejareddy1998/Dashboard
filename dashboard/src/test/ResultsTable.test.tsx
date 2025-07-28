import { render, screen } from "@testing-library/react";
import ResultsTable from "../components/ResultsTable";
import type { InferenceResult } from "../types";

test("renders table with results", () => {
  const results: InferenceResult[] = [
    { id: 1, label: "Model A-setosa", score: 92.1, x: 1, y: 50 },
    { id: 2, label: "Model A-versicolor", score: 83.7, x: 2, y: 60 },
  ];

  render(<ResultsTable results={results} />);

  // Table heading
  expect(screen.getByText(/results table/i)).toBeInTheDocument();

  // Row 1 checks
  expect(screen.getByText("1")).toBeInTheDocument();
  expect(screen.getByText("Model A-setosa")).toBeInTheDocument();
  expect(screen.getByText("92.10")).toBeInTheDocument();

  // Row 2 checks
  expect(screen.getByText("2")).toBeInTheDocument();
  expect(screen.getByText("Model A-versicolor")).toBeInTheDocument();
  expect(screen.getByText("83.70")).toBeInTheDocument();
});
