import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";
import * as mockApi from "../services/mockApi";
import { vi } from "vitest";

// Mock the module
vi.mock("../services/mockApi");

describe("App", () => {
  it("runs inference and displays chart", async () => {
    // Mock the API response with correct shape
    vi.spyOn(mockApi, "runMockInference").mockResolvedValue(
      Array.from({ length: 10 }, (_, i) => ({
        id: i,
        label: `Label ${i}`,
        score: Math.random() * 100, // Must include score
        x: i,
        y: Math.random(),
      }))
    );

    render(<App />);

    // Fill in parameter input
    const input = screen.getByLabelText(/parameter/i);
    await userEvent.clear(input);
    await userEvent.type(input, "mock-input");

    // Click the "Run Model" button
    const button = screen.getByRole("button", { name: /run model/i });
    await waitFor(() => expect(button).toBeEnabled());
    await userEvent.click(button);

    // ✅ Assert that the chart canvas is rendered
    const canvas = await screen.findByRole("img");
    expect(canvas).toBeInTheDocument();
  });
});
