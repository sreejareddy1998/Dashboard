import { render, screen } from "@testing-library/react";
import ResultsChart from "../components/ResultsChart";

const results = [
  { id: 1, label: "Model A-setosa", score: 92.1 },
  { id: 2, label: "Model A-versicolor", score: 83.7 },
];

test("renders chart heading", () => {
  render(<ResultsChart results={results} />);
  expect(screen.getByText(/score chart/i)).toBeInTheDocument();
});
