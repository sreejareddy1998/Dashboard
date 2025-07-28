// src/services/mockApi.ts
import type { InferenceResult } from "../types";

export async function runMockInference(
  model: string,
  param: string
): Promise<InferenceResult[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (param.toLowerCase() === "error") {
        reject(new Error("Simulated model inference failure"));
      } else {
        const results: InferenceResult[] = Array.from(
          { length: 10 },
          (_, i) => ({
            id: i,
            label: `Label ${i}`,
            score: Math.random() * 100,
            x: i,
            y: Math.random() * 100,
          })
        );
        resolve(results);
      }
    }, 1000);
  });
}
