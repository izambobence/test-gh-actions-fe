/// <reference types="vitest" />
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/test-gh-actions-fe/",
  test: {
    globals: true,
    environment: "jsdom", // important for React testing
  },
});
