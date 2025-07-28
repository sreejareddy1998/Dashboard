import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ModelSelector from "../components/ModelSelector";

test("selects a different model", async () => {
  const setModel = vi.fn();

  render(<ModelSelector model="Model A" setModel={setModel} />);

  // ✅ MUI Select uses role="combobox", not "button"
  const select = screen.getByRole("combobox");
  await userEvent.click(select);

  // Wait for and click the new model option
  const option = await screen.findByText("Model B");
  await userEvent.click(option);

  // Verify model change callback triggered
  expect(setModel).toHaveBeenCalledWith("Model B");
});
