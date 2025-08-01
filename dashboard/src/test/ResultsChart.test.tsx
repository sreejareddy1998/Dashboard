import { render, screen } from "@testing-library/react";
import ResultsChart from "../components/ResultsChart";
import type { InferenceResult } from "../types"; // adjust import path as needed

const results: InferenceResult[] = [
  { id: 1, label: "Model A-setosa", score: 92.1, x: 1, y: 2 },
  { id: 2, label: "Model A-versicolor", score: 83.7, x: 3, y: 4 },
];

test("renders chart canvas", () => {
  render(<ResultsChart results={results} />);
  expect(screen.getByRole("img")).toBeInTheDocument();
});
