// vitest.config.ts
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // Use test(), expect(), vi, etc. without imports
    environment: "jsdom", // Simulate browser environment
    setupFiles: "./src/test/setup.ts", // Global test setup file
    include: ["src/test/**/*.test.ts?(x)"], // Pick test files only from /test folder
    coverage: {
      reporter: ["text", "json", "html"], // Generates output in console and coverage folder
    },
  },
});
