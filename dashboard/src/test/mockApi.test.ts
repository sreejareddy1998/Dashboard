import { runMockInference } from "../services/mockApi";

test("returns 10 mock results", async () => {
  const results = await runMockInference("Model A", "valid");
  expect(results).toHaveLength(10);
});

test('throws error on param = "error"', async () => {
  await expect(runMockInference("Model A", "error")).rejects.toThrow(
    "Simulated model inference failure"
  );
});
