import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";
import * as mockApi from "../services/mockApi"; // Import all exports
import { vi } from "vitest";

vi.mock("../services/mockApi"); // Mock the module

describe("App", () => {
  it("runs inference and displays chart", async () => {
    // ✅ Include `score` to avoid .toFixed(2) crash
    vi.spyOn(mockApi, "runMockInference").mockResolvedValue(
      Array.from({ length: 10 }, (_, i) => ({
        id: i,
        label: `Label ${i}`,
        score: Math.random() * 100, // MUST include score!
        x: i,
        y: Math.random(),
      }))
    );

    render(<App />);

    const input = screen.getByLabelText(/parameter/i);
    await userEvent.clear(input);
    await userEvent.type(input, "mock-input");

    const button = screen.getByRole("button", { name: /run model/i });
    await waitFor(() => expect(button).toBeEnabled());
    await userEvent.click(button);

    const heading = await screen.findByText(/score chart/i);
    expect(heading).toBeInTheDocument();
  });
});
