import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import InferenceForm from "../components/InferenceForm";
import { useState } from "react";

// ✅ Match the actual prop names used in your component: param and setParam
function Wrapper() {
  const [param, setParam] = useState("");
  return <InferenceForm param={param} setParam={setParam} />;
}

test("types into parameter input", async () => {
  render(<Wrapper />);

  const input = screen.getByLabelText(/parameter/i);
  await userEvent.type(input, "test");

  expect((input as HTMLInputElement).value).toBe("test");
});
